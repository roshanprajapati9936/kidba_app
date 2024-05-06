import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import categoriesRouter from './routers/catergories.router.js'
import popularRouter from './routers/popularclasses.router.js'
import newsRouter from './routers/news.router.js'
import  newscategoryRouter from './routers/newscategoryrouter.js'
import levelRouter from './routers/level.router.js'
import pricesRouter from './routers/price.router.js'
import kidbaRouter from './routers/kidbaRouter.js'
import blogRouter from './routers/blogrouter.js'
import blogtagRouter from './routers/blogtag.router.js'
import userRouter from './routers/user.router.js'
import dotenv from 'dotenv'
import categoryRouter from './routers/category.router.js'
import productRouter from './routers/product.router.js'
import  path from 'path'


// configure
dotenv.config();

const app=express()

app.use(express.json()); // body parser
app.use(cors());
app.use('/uploads/', express.static('uploads'));
// app.use(express.static(path.join(__dirname, '../front-end/build')))

const PORT=8002;

mongoose.connect('mongodb://127.0.0.1:27017/Kidba')
.then(()=>console.log('Connected!'));

app.listen(PORT,()=>{
    console.log(`Running on the port ${PORT}`)
})
// app.use('*',function(req,res){
//     res.sendFile(path.join(__dirname,'../client/build/index.html'))
// })

app.use(categoriesRouter);
app.use(popularRouter);
app.use(newsRouter);
app.use(newscategoryRouter);
app.use(levelRouter);
app.use(pricesRouter);
app.use(kidbaRouter);
app.use(blogRouter);
app.use(blogtagRouter);
app.use(userRouter);
app.use(categoryRouter);
app.use(productRouter);
