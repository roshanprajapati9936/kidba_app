import express from 'express'
import registerController, { forgotPasswordController, getOrderController, loginController, testController, updateProfileController } from '../controllers/user.controller.js';
import { isAdmin, requireSignIn } from '../middlewares/auth.middleware.js';


const router = express.Router();
// register
router.post("/register",registerController);
// login 
router.post("/login",loginController);

// forgot password
router.post("/forgot-password",forgotPasswordController);

// Test router
router.get('/test',requireSignIn,isAdmin, testController);

// Protected route auth
router.get('/user-auth',requireSignIn, (req,res)=>{
    res.status(200).send({ok:true});
})

// Protected Admin route auth
router.get('/admin-auth',requireSignIn, isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

// update Profile
router.put("/profile",requireSignIn, updateProfileController);
export default  router;

// orders
router.get("/get-orders", requireSignIn, getOrderController);