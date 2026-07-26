import {
createContext,
useContext,
useEffect,
useState
} from "react";

import axios from "axios";

const AuthContext=createContext();
export const AuthProvider=({children})=>{
const [user,setUser]=useState(null);

const fetchUser=async()=>{

 const token =
localStorage.getItem("token");
if(!token)return;

try{
const res =
await axios.get(
"http://localhost:5000/api/auth/me",

{

headers:{

Authorization:`Bearer ${token}`
}
}
);

setUser(res.data);
}catch(error){
console.log(error);
}
};

useEffect(()=>{
fetchUser();
},[]);

const logout=()=>{

localStorage.removeItem("token");

setUser(null);

};

return(
<AuthContext.Provider
value={{
user,
logout,
fetchUser
}}
>
{children}
</AuthContext.Provider>

);

};
export const useAuth=()=>useContext(AuthContext);