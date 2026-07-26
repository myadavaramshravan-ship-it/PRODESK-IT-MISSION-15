const User=require("../models/User");



exports.upgradeUser=async(req,res)=>{


try{


const user =
await User.findById(req.user.id);



if(!user){

return res.status(404).json({

message:"User not found"

});

}



user.plan="pro";


await user.save();



res.json({

success:true,

plan:user.plan

});



}catch(error){


res.status(500).json({

message:error.message

});


}


};