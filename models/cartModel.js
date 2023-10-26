const mongoose = require('mongoose');
const collectionName = 'cart'
const schema = mongoose.Schema({
    userId:{
        type:String,
        required:true,
        ref:'user'
    },
    items:[{
        productId:{
            type:String,
            required:true,
            ref:'product'
        },
        quantity:{
            type:Number
        }
        }]
})

const model = mongoose.model(collectionName,schema);
module.exports = model