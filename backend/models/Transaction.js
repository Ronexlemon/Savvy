const { Timestamp } = require("mongodb");
const mongoose = require("mongoose")

const {Schema} = mongoose;

const  TransactionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true // Ensures each user has only one profile
      },
    
    amount:{
        type:String,
        required:false,
    },
    month:{
        type:String,
        required:false,
    },
    transactionType:{
        type:String,
        required:true,
        enum:['utility','friends','transfers'],
        default:'utility'
    }


},
{timestamps:true})


module.exports = mongoose.models.Transaction || mongoose.Model("Transaction",TransactionSchema)