import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

import "../App.css";


const Register=()=>{


const navigate=useNavigate();


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



const register=async(e)=>{


e.preventDefault();


try{


await axios.post(
"http://localhost:5000/api/auth/register",
{
name,
email,
password
}
);


toast.success(
"Account created"
);


navigate("/login");


}catch(err){

toast.error(
err.response?.data?.message || "Registration Failed"
);

}


};



return(

<div className="auth-page">


<div className="auth-container">


<div className="auth-brand">

<h1>
TaskFlow
</h1>


<p>
Organize. Track. Complete.
</p>


</div>



<h2>
Create account
</h2>


<p className="subtitle">
Start managing your tasks today
</p>



<form 
className="auth-form"
onSubmit={register}
>



<label>
Full Name
</label>


<input
placeholder="Your name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>



<label>
Email
</label>


<input
type="email"
placeholder="Email address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>



<label>
Password
</label>


<input
type="password"
placeholder="Create password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>



<button className="auth-button">

Create Account

</button>


</form>



<p className="switch">

Already have account?


<button
onClick={()=>navigate("/login")}
>

Login

</button>


</p>


</div>

</div>


)


}


export default Register;