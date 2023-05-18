import React from 'react'
import PaidIcon from '@mui/icons-material/Paid';

export const Navbar = () => {
  return (
    <>
     <div id="navbar">
         <h1 style={{color:"white"}}>BillSplitter<PaidIcon /></h1>

        <div id="nav-buttons">
        <button>Register</button>
        <button>LogIn</button>
        </div>
     </div>


    </>
  )
}
