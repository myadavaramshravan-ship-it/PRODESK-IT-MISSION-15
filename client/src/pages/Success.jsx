import React,{useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import {useAuth} from "../context/AuthContext";



function Success(){


const navigate = useNavigate();

const {fetchUser} = useAuth();




useEffect(()=>{


const activatePro = async()=>{


try{


const token =
localStorage.getItem("token");



await axios.post(


"http://localhost:5000/api/payment/upgrade",


{},


{
headers:{
Authorization:`Bearer ${token}`
}
}


);



// refresh user data

await fetchUser();



navigate("/dashboard");



}catch(error){


console.log(error);


}



};



activatePro();



},[]);





return(

<div>


<h1>
Payment Successful 🎉
</h1>


<p>
Activating TaskFlow Pro...
</p>


</div>


);


}


export default Success;