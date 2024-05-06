
import { comparePassword, hashPassword } from "../helpers/authHelpers.js"
import userModel from "../models/userModel.js"
import orderModel from '../models/orderModel.js'
import JWT from 'jsonwebtoken'

const registerController = async (req, res) => {
    try {
        const { name, lastName, userName, email, password, question } = req.body

        // validation
        if (!name) {
            return res.send({ message: 'Name is required' })
        }
        if (!lastName) {
            return res.send({ message: 'LastName is required' })
        }
        if (!userName) {
            return res.send({ message: ' UserName is required' })
        }
        if (!email) {
            return res.send({ message: 'Email is required' })
        }
        if (!password) {
            return res.send({ message: 'Password is required' })
        }
        if (!question) {
            return res.send({ message: "Question is required" })
        }

        // check user 
        const exisitingUser = await userModel.findOne({ email });

        // exisiting user
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already register please login'
            })
        }
        // register user
        const hashedPassword = await hashPassword(password);
        // save 
        const user = new userModel({ name, lastName, userName, email, question, password: hashedPassword }).save()

        res.status(201).send({
            success: true,
            message: 'Register successfully',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: 'false',
            message: 'error in registration',
            error,
        })
    }
}
export default registerController;


// login 
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        // check user
        const user = await userModel.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'email is not register'
            })
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid password'
            });
        }
        // token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "10d" })
        res.status(200).send({
            success: true,
            message: "login successfully",
            user: {
                name: user.name,
                lastName: user.lastName,
                userName: user.userName,
                email: user.email,
                password: user.password,
                role: user.role,
            },
            token
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in login'
        })
    }
}

// Forgot Password

export const forgotPasswordController = async (req, res) => {
    try {

        const { email, question, newPassword } = req.body

        if (!email) {
            res.status(400).json({ message: 'Email is required' })
        }
        if (!question) {
            res.status(400).json({ message: 'Question is required' })
        }
        if (!newPassword) {
            res.status(400).json({ message: 'NewPassword is required' })
        }
        // check user
        const user = await userModel.findOne({ email, question })

        // validation
        if (!user) {
            res.status(404).json({
                success: false,
                message: 'Wrong Email or Answer'
            })
        }
        const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id, { password: hashed })
        res.status(200).json({
            success: true,
            message: 'Password Reset Successfully',
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something  went wrong'
        })

    }
}


// test controller
export const testController = async (req, res) => {
    res.send("Protected route");
}

// Upadate Profile Controller

export const updateProfileController = async (req, res) => {
    try {
        const { name, lastName, userName, email, password } = req.body;
        const user = await userModel.findById(req.user._id)

        if (!password || password.length < 6) { 
            return res.status(400).json({ error: 'Password is required and must be at least 6 characters long'});
        }

        const hashedPassword = await hashPassword(password);

        // Update user with new information
        const updatedUser = await userModel.findByIdAndUpdate(req.user._id, {
            name: name || user.name,
            lastName: lastName || user.lastName,
            userName: userName || user.userName,
            email: email || user.email,
            password: hashedPassword || user.password,
        }, { new: true });

        res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            updatedUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error while updating profile',
            error: error.message
        });
    }
};

// orders
export  const getOrderController = async(req,res)=>{
         try{
            const order = await orderModel.find({buyer:req.user._id})
            console.log(order)
         }catch(error){
            console.log(error)
            res.status(500).json({
                success:false,
                message:"Error while getting orders"
            })
         }
}




