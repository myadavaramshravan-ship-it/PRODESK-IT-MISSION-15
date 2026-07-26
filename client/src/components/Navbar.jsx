import React from "react";

function Navbar({user,logout}){
const handleLogout=()=>{
logout();
window.location.href="/login";
};
return(
<nav className="navbar">
<div className="logo">
TaskFlow
</div>

<div className="user-section">

<span>
{user?.name}
</span>

<button
onClick={handleLogout}
>
Logout
</button>
</div>
</nav>
);
}
export default Navbar;