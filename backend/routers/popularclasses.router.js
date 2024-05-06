import express from 'express'
import { addPopularClasses, braintreePaymentController, braintreeTokenController, deletePopularClasses, getPopularClasses, getspopularClasses, productFilterController, updatePopularClasses } from '../controllers/popularclasses.controller.js';
import { requireSignIn } from '../middlewares/auth.middleware.js';

const router=express.Router()

router.get("/gets-popularclasses",getspopularClasses);

router.post("/add-popularclasses",addPopularClasses);

router.get("/get-popularclasses/:popular_id",getPopularClasses);

router.put("/update-popularclasses/:popular_id",updatePopularClasses);

router.delete("/delete-popularclasses/:popular_id",deletePopularClasses);

// filter product
router.post('/product-filter',productFilterController);

// payments Routes
// token 
router.get("/braintree/token", braintreeTokenController);

// payments
router.post("/braintree/payment" , requireSignIn, braintreePaymentController )

export default router;