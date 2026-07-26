import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

import "../App.css";


const Login =()=>{

const navigate = useNavigate();


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const handleLogin=async(e)=>{

e.preventDefault();


try{

const res = await axios.post(
"http://localhost:5000/api/auth/login",
{
email,
password
}
);


localStorage.setItem(
"token",
res.data.token
);


toast.success("Login Successful");


navigate("/dashboard");


}catch(error){

toast.error(
error.response?.data?.message || "Login Failed"
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
Manage your work smarter
</p>

</div>



<h2>
Welcome back
</h2>


<p className="subtitle">
Login to your account
</p>



<form 
className="auth-form"
onSubmit={handleLogin}
>


<label>
Email
</label>

<input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>



<label>
Password
</label>


<input
type="password"
placeholder="Enter password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>



<button className="auth-button">

Login

</button>



</form>



<p className="switch">

Don't have an account?

<button
onClick={()=>navigate("/register")}
>

Create account

</button>


</p>


</div>


</div>


)

}


export default Login;