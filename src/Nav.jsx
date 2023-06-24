import React from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link, useNavigate} from "react-router-dom"

export const Nav = () => {
  let navigate= useNavigate();
  const handleLogout=async()=>{
    let a=await window.confirm("are you sure want to logout")
    
    if(a){
    
       navigate("/");
       localStorage.clear();
     
    }
  }
    
  return (
    <div>
        <div id="navbar-in-group">
            
           
         <p id="nav-h1"></p><AccountCircleIcon id="icon-account"/><span id="id-name">Hii, {localStorage.getItem('userid')}</span>
       <Link ><input type="button" value="Logout"  id="logout-button" onClick={handleLogout} /></Link>  
           
        </div>
    </div>
  )
}
