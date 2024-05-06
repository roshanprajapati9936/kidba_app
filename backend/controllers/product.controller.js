import multer from "multer";
import path from 'path'
import fs from 'fs'
import productModel from "../models/product.model.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (fs.existsSync('./uploads/createclassses')) {
            cb(null, './uploads/createclassses')

        } else {
            fs.mkdirSync('./uploads/createclassses')
            cb(null, './uploads/createclassses')
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

export const createProductController = (req, res) => {

    try {
        const addImage = upload.single("avatar")
        addImage(req, res, function (err) {
            if (err)  return res.status(400).json({ message: err.message });
             

            const {  name, description, price, category, quantity, photo } = req.body;
            let filename = null;
            if (req.file) {
                filename = req.file.filename;
            }
            const productClass = new productModel({
                name: name,
                description: description,
                price: price,
                category:category,
                quantity:quantity,
                photo: filename,
            });

            productClass.save();
            if (productClass){
                return res.status(201).json({
                    data: productClass,
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

// gets product
export const getsProductsController = async (req, res) => {
    try {
        const products = await productModel.aggregate([   
           
            {
                $lookup: {
                    from: "carts",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                },
            },
            { $unwind: "$category" },
            { $sort: { '_id': 1 } },
            { $limit: 8 },
        ]);

        if (products) {
            return res.status(200).json({
                count:products.length,
                data: products,
                message: 'Fetched!',
                filepath: "http://localhost:8002/uploads/createclassses",
                products,
                
                
            });
        }
        return res.status(404).json({
            message: 'No data found'
        });

    } catch (error) {
        console.error("Error fetching gets classes:", error);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}
// single product
export const singleProductController = async (req, res) => {
    try {
        const productID = req.params.product_id;
        const product = await productModel.findById(productID);
        if (product) {
            return res.status(200).json({
                data: product,
                message: 'Product fetched successfully!',
                // filepath: "http://localhost:8002/uploads/popularclasses",
                product,
            });
        } else {
            return res.status(404).json({
                message: 'Product not found'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message 
        });
    }
};
// update product
export const updateProductController = async (req, res) => {
    try {
        const updateProduct = upload.single("avatar");
        updateProduct(req, res, async function (err) {

            if (err) return res.status(400).json({ message: err.message });
            const productID = req.params.product_id;
            const existProduct = await productModel.findOne({ _id: productID });
            const {  name, description, price, category, quantity, photo } = req.body;

            let filename = existProduct.image;
            if (req.file) {
                filename = req.file.filename;
                if (fs.existsSync('./uploads/createclasses/' + existProduct.photo)) {
                    fs.unlinkSync('./uploads/createclasses/' + existProduct.photo)
                }
            }
            const updatedProduct = await productModel.updateOne({ _id: productID }, {
                $set: {
                    name: name,
                    description: description,
                    price: price,
                    category:category,
                    quantity:quantity,
                    photo: filename,
                }
            });
            if (updatedProduct.acknowledged) {
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
// delete product

export const deleteProductController = async (req, res) => {
    try {
        const productID = req.params.product_id;
        const existProduct = await productModel.findOne({ _id: productID });
        const product = await productModel.deleteOne({ _id: productID });
        if (product.acknowledged) {

            if (fs.existsSync('./uploads/createclasses/' + existProduct.photo)) {
                fs.unlinkSync('./uploads/createclasses/' + existProduct.photo)
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



