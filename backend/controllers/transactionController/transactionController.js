const asyncHandler = require("express-async-handler")

const {getAllTotal,getAllFriendsTransaction,getAllUtilityTransaction,getAllTransactions,getAllTransfersTransaction,getAllFriendsTotalTransaction,getAllUtilityTotalTransaction,createTransaction,getAllMonthTotal} = require("../../services/transaction/transaction")




const createATransaction = asyncHandler(async(req,res)=>{
    const {id} = req.user
    const {transanctiontype,amount,month} = req.body;
    try{

        const transaction = await createTransaction(id,transanctiontype,amount,month);
        if(!transaction){
            return res.status(404).json({
                status:false,
                message:"No transactions Created"
            })
        }
        await transaction.save();
        return res.status(200).json({message:"created successively"}          
        );
    }catch(error){
        return res.status(500).json({message:"please try another time"})

    }

    
})



const getAllTransaction = asyncHandler(async(req,res)=>{
    const {id} = req.user
    try{

        const transactions = await getAllTransactions(id);
        if(!transactions || transactions.length ==0){
            return res.status(404).json({
                status:false,
                message:"No transactions found"
            })
        }
        return res.status(200).json(
            transactions
        );
    }catch(error){
        return res.status(500).json({message:"please try another time"})

    }

    
})

//get all friends transactions
const getFriendsTransaction = asyncHandler(async(req,res)=>{
    const {id} = req.user
    try{

        const transactions = await getAllFriendsTransaction(id);
        if(!transactions || transactions.length ==0){
            return res.status(404).json({
                status:false,
                message:"No transactions found"
            })
        }
        return res.status(200).json(
            transactions
        );
    }catch(error){
        return res.status(500).json({message:"please try another time"})

    }

    
})

//get all friends transactions
const getUtilityTransaction = asyncHandler(async(req,res)=>{
    const {id} = req.user
    try{

        const transactions = await getAllUtilityTransaction(id);
        if(!transactions || transactions.length ==0){
            return res.status(404).json({
                status:false,
                message:"No transactions found"
            })
        }
        return res.status(200).json(
            transactions
        );
    }catch(error){
        return res.status(500).json({message:"please try another time"})

    }

    
})


//get all friends transactions
const getTransfersTransaction = asyncHandler(async(req,res)=>{
    const {id} = req.user
    try{

        const transactions = await getAllTransfersTransaction(id);
        if(!transactions || transactions.length ==0){
            return res.status(404).json({
                status:false,
                message:"No transactions found"
            })
        }
        return res.status(200).json(
            transactions
        );
    }catch(error){
        return res.status(500).json({message:"please try another time"})

    }

    
})



//total

const getTotalAmount = asyncHandler(async(req,res)=>{
    const {id} = req.user
    try{

        const transactions = await getAllTotal(id);
        if(!transactions || transactions.length ==0){
            return res.status(404).json({
                status:false,
                message:"No transactions found"
            })
        }
        return res.status(200).json(
            transactions
        );
    }catch(error){
        return res.status(500).json({message:"please try another time"})

    }

    
})


//get all mont total

const getTotalMonthAmount = asyncHandler(async(req,res)=>{
    const {id} = req.user
    const {month} = req.body
    try{

        const transactions = await getAllMonthTotal(id,month);
        if(!transactions || transactions.length ==0){
            return res.status(404).json({
                status:false,
                message:"No transactions found"
            })
        }
        return res.status(200).json(
            transactions
        );
    }catch(error){
        return res.status(500).json({message:"please try another time"})

    }

    
})


module.exports ={createATransaction,
getTotalAmount,
getAllTransaction,
getTotalMonthAmount,
getFriendsTransaction,
getUtilityTransaction,
getTransfersTransaction}