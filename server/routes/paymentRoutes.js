const express=require("express");

const router=express.Router();


const {
createCheckoutSession
}
=require("../controllers/paymentController");


const {
upgradeUser
}
=require("../controllers/upgradeController");


const auth=
require("../middleware/authMiddleware");



router.post(
"/create-checkout-session",
createCheckoutSession
);



router.post(
"/upgrade",
auth,
upgradeUser
);



module.exports=router;