const Stripe=require("stripe");


const stripe=new Stripe(
process.env.STRIPE_SECRET_KEY
);



exports.createCheckoutSession=async(req,res)=>{


try{


const session =
await stripe.checkout.sessions.create({


payment_method_types:[
"card"
],


mode:"payment",



line_items:[

{

price_data:{

currency:"usd",


product_data:{
name:"TaskFlow Pro Upgrade"
},


unit_amount:500

},


quantity:1

}

],



success_url:
`${process.env.CLIENT_URL}/success`,



cancel_url:
`${process.env.CLIENT_URL}/cancel`


});



res.json({

url:session.url

});



}catch(error){


console.log(error);


res.status(500).json({

message:error.message

});


}


};