const express = require("express")

const router = express.Router();

const {getAllTransaction,getTotalMonthAmount,getTotalAmount,createATransaction,getFriendsTransaction,getTransfersTransaction,getUtilityTransaction} = require("../controllers/transactionController/transactionController")
const {validateToken} = require("../middleWare/handleJwtToken")

router.post("/create",validateToken,createATransaction)


router.get("/getTotalAmount",validateToken,getTotalAmount);

router.get("/getTotalMontlyAmount",validateToken,getTotalMonthAmount)
router.get("/getAllTransactions",validateToken,getAllTransaction);
router.get("/getfriendTransactions",validateToken,getFriendsTransaction);
router.get("/getUtiltyTransactions",validateToken,getUtilityTransaction);
router.get("/getTransfersTransactions",validateToken,getTransfersTransaction);








module.exports = router;