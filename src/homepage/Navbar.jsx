import React from 'react'
 import PaidIcon from '@mui/icons-material/Paid';
 import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <>
     <div id="navbar">

         <h1 style={{color:"white",fontSize:"40PX"}}>BillSplitter</h1>
        


        <div id="nav-buttons">
        <Link to="/signin"><input type="submit" value="Sign Up" /></Link>
        <Link to="/Login"><input type="submit" value="Log In"></input></Link>
        </div>
     </div>


    </>
  )
}