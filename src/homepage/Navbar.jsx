import React from 'react'
import PaidIcon from '@mui/icons-material/Paid';

export const Navbar = () => {
  return (
    <>
     <div id="navbar">
         <h1>BillSplitter<PaidIcon /></h1>

        <div id="nav-buttons">
        <button>Register</button>
        <button>Sign In</button>
        </div>
     </div>


    </>
  )
}
