const Transaction = require('../../models/Transaction')


//add transaction


const createTransaction = async(transactionType,amount)=>{

    const transaction = new Transaction({
        amount:amount,
        transactionType:transactionType,
    })
    return transaction;

}

//get all trnsactions
const getAllTransactions =async()=>{
    const transactions =  await Transaction.find({})
    return transactions;
}

//get total amount of transaction

const getAllFriendsTransaction = async()=>{
    const transactionsamount = await Transaction.find({transactionType:"friends"})
    return transactionsamount}


 const getAllUtilityTransaction = async()=>{
        const transactionsamount = await Transaction.find({transactionType:"utility"})
        return transactionsamount}

        const getAllTransfersTransaction = async()=>{
            const transactionsamount = await Transaction.find({transactionType:"transfers"})
            return transactionsamount}
module.exports = {
    createTransaction,
    getAllTransactions,
    getAllFriendsTransaction,
    getAllUtilityTransaction,
    getAllTransfersTransaction
}