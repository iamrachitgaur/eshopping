const express = require('express');
const model = require('../models/cartModel');
const auth = require('../middleware/auth');
const router = express.Router();

// router.post('/addCart',auth,async (req,res)=>{
//     const options = Object.keys(req.body)
//     const optionsMain = ['items']
//     const isMatch = options.every((option) => optionsMain.includes(option))

//     if(!isMatch){
//         return res.status(400).send('You Provide Invalid Input')
//     }
//     try{
//         const cart = await new model(req.body)
//         await cart.save()
//         res.status(201).send(cart)
//     }
//     catch(e){
//         res.status(500).send(e)
//     }
// })

// router.get('/getCart',auth,async (req,res)=>{

//     try{

//     }
//     catch(e){
//         res.status(500).send(e)
//     }

// })

module.exports = router