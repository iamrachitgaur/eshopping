const mongoose = require('mongoose');
const collectionName = 'product';

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    productURL:{
        type:String,
        required:true
    },
    category:{
        type:String,
        lowercase:true,
        trim:true
    },
    prize:{
        type:Number,
        required:true,
        trim:true
    },
    available:{
        type:Boolean,
        required:true
    }
})

const model = mongoose.model(collectionName,schema);
module.exports = model;