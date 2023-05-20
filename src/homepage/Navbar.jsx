import React from 'react'
 import PaidIcon from '@mui/icons-material/Paid';
import { Link } from 'react-router-dom';
//  import { useNavigate } from 'react-router-dom';
//  import {Login} from './Login';

export const Navbar = () => {


  // const navigate=useNavigate();
// function handleClick(){
// navigate("./Login")
// }



  return (
    <>
     <div id="navbar">

         <h1 style={{color:"white",fontSize:"45PX"}}>BillSplitter<PaidIcon /></h1>

         <h1>BillSplitter<PaidIcon/></h1> 


        <div id="nav-buttons">
        <Link to='/Home'> <button >Home</button></Link>
        <Link to='/Login'> <button>Login</button></Link>
        <Link to='/Body'> <button>Body</button></Link>

        </div>
     </div>


    </>
  )
}
