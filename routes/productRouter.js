const express = require('express');
const model = require('../models/productModel');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./src/assets/images')
    },
    filename:(req,file,cb)=>{
        cb(null,`${mongoose.Types.ObjectId()}.png`)
    }
})

const upload = multer({storage})

router.post('/addProduct',auth,upload.single('productURL'),async (req,res)=>{
    const options = Object.keys(req.body)
    const optionsMain = ['name','productURL','category','prize','available']
    const isMatch = options.every((option) => optionsMain.includes(option))

    if(!isMatch){
        return res.status(400).send('You Provide Invalid Input')
    }
    try{
        req.body.productURL = `./assets/images/${req.file.filename}`
        const product = await new model(req.body)
        await product.save()
        res.status(201).send({file:req.file,body:req.body})
    }
    catch(e){
        res.status(500).send(e)
    }
})

router.get('/getProduct',auth,async (req,res)=>{
    try{
        const products = await model.find()
        res.status(200).send(products)
    }
    catch(e){
        res.status(500).send(e)
    }
})

// router.get()

// router.patch()

// router.delete()

module.exports = router