import multer from "multer";
import path from 'path'
import fs from 'fs'
import popularclassesModel from "../models/popularclasses.model.js";
import braintree from 'braintree'
import orderModel from "../models/orderModel.js";

// payment Gateway
   var  gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "jvryfb8nfsyvtrjf",
    publicKey: "ch3rnjhtwzh8t7r4",
    privateKey: "c247f423dae6eb2d801bc69292226bb0",
  });
 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (fs.existsSync('./uploads/popularclasses')) {
            cb(null, './uploads/popularclasses')

        } else {
            fs.mkdirSync('./uploads/popularclasses')
            cb(null, './uploads/popularclasses')
        }
    },
    filename: function (req, file, cb) {

        let orName = file.originalname;
        let ext = path.extname(orName);
        let basename = path.parse(orName).name;
        let filename = basename + '-' + Date.now() + ext
        cb(null, filename)
    }
})
const upload = multer({ storage: storage })

export const getspopularClasses = async (req, res) => {
    try {
        const {limit, page} = req.query
        console.log(limit, page)
        const populars = await popularclassesModel.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                },
            },
            { $unwind: "$category" },
            { $sort: { '_id': 1 } },
            { $limit: 8 },
        ]);

        if (populars) {
            return res.status(200).json({
                data: populars,
                message: 'Fetched!',
                filepath: "http://localhost:8002/uploads/popularclasses"
            });
        }
        return res.status(404).json({
            message: 'No data found'
        });

    } catch (error) {
        console.error("Error fetching popular classes:", error);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

export const addPopularClasses = (req, res) => {

    try {
        const addImage = upload.single("avatar")
        addImage(req, res, function (err) {
            if (err)  return res.status(400).json({ message: err.message });
             

            const { title, category, price, label, duration, description } = req.body;
            let filename = null;
            if (req.file) {
                filename = req.file.filename;
            }
            const popularClass = new popularclassesModel({
                title: title,
                category: category,
                price: price,
                label: label,
                duration: duration,
                description: description,
                image: filename,
            });

            popularClass.save();
            if (popularClass){
                return res.status(201).json({
                    data: popularClass,
                    message: 'Created'

                })
            }
            return res.status(400).json({
                message: 'Bad request'
            })

        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getPopularClasses = async (req, res) => {
    try {
        const popularID = req.params.popular_id;
        const popular = await popularclassesModel.findOne({ _id: popularID }).populate("category")
        if (popular) {
            return res.status(200).json({
                data: popular,
                filepath: "http://localhost:8002/uploads/popularclasses",
                message: 'Fetched!'
            })
        }
        return res.status(400).json({
            message: 'Bad request'
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updatePopularClasses = async (req, res) => {
    try {
        const updatePopular = upload.single("avatar");
        updatePopular(req, res, async function (err) {

            if (err) return res.status(400).json({ message: err.message });
            const popularID = req.params.popular_id;
            const existPopular = await popularclassesModel.findOne({ _id: popularID });
            const { title, category, price, label, duration, description } = req.body

            let filename = existPopular.image;
            if (req.file) {
                filename = req.file.filename;
                if (fs.existsSync('./uploads/popularclasses/' + existPopular.image)) {
                    fs.unlinkSync('./uploads/popularclasses/' + existPopular.image)
                }
            }
            const updatedPopular = await popularclassesModel.updateOne({ _id: popularID }, {
                $set: {
                    title: title,
                     category: category,
                     price: price,
                     label: label,
                     duration: duration,
                     description: description,
                     image: filename,
                }
            });
            if (updatedPopular.acknowledged) {
                return res.status(200).json({
                    message: 'Updated'
                })
            }

            return res.status(400).json({
                message: 'Bad request'
            })
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deletePopularClasses = async (req, res) => {
    try {
        const popularID = req.params.popular_id;
        const existPopular = await popularclassesModel.findOne({ _id: popularID });
        const popular = await popularclassesModel.deleteOne({ _id: popularID });
        if (popular.acknowledged) {

            if (fs.existsSync('./uploads/popularclasses/' + existPopular.image)) {
                fs.unlinkSync('./uploads/popularclasses/' + existPopular.image)
            }

            return res.status(200).json({
                message: 'Deleted'
            })
        }

        return res.status(400).json({
            message: 'Bad request'
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// filter

export const productFilterController =async(req,res)=>{
    try{ 
        const {checked,radio} =req.body
        let args ={}
        if(checked.length > 0) args.catergory = checked
        if(radio.length) args.price ={$gte: radio[0], $lte: radio[1]}
        const products = await popularclassesModel.find(args);
        res.status(200).json({
            success:true,
            products
        })

    }catch(error){
     console.log(error)
     res.status(400).json({
         success:false,
         message:'Error While Filtering Products',
         error
     })
    }
}

// Payment gateway API
// token

export const braintreeTokenController =async(req,res)=>{
    try{
        gateway.clientToken.generate({},function(err,response){
            if(err){
                res.status(500).json(err)
            }else{
                res.send(response)
            }
        })
    }catch(error){
     console.log(error)
    }
}
// Payment
export const braintreePaymentController =async(req,res)=>{
    try{
        const {cart, nonce} = req.body
        let total = 0
        cart.map((i) => {
            total += i.price;
        });
        
        let newTransaction = gateway.transaction.sale({
            amount:total,
            paymentMethodNonce:nonce,
            options : {
                submitForSettlement:true
            }
        },
        function(error, result){
        if(result){
            const order = new orderModel({
                products:cart,
                payment : result,
                buyer : req.user._id
            }).save()
            res.json({ok:true})
        }else{
            res.status(500).send(error)
        }
        }
        )
          
    }catch(error){
      console.log(error)
    }
}





