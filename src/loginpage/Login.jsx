import React from 'react'
import {useRef,useState} from "react"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"


const Login = () => {
 
  let ruserid= useRef();
  let rpassword = useRef();
  let [success,notsuccess]=useState();
   let navigate=useNavigate();
  
  
  
  let formSubmit=async(e)=>{
  e.preventDefault();
  
 
  let userid = ruserid.current.value;
  let password = rpassword.current.value;
  let data = {
  
    userid: userid,
    password: password
  }
  
  
  if(userid !== "" && password !== "")
  {
  
  await axios.post("http://localhost:8000/login", data).then(
    res=>{
      if(res.data ==="success")
      {
        localStorage.setItem("userid",data.userid)
        navigate("/dashboard")
        
      }
      else
      {
        notsuccess("Invalid Password or Email")
      }
    }
  )


   

  

  
  


  }


}

  return (
    <div className='container'>


<form  onSubmit={formSubmit}>
    <h3  style={{marginLeft:"170px"}}>Log In</h3>
    <div className="login-form">
    <label>Userid:</label><br/>
<input type='text' name='username' placeholder=' enter Username'  ref={ruserid} required autoFocus></input><br/>


    <label>Password:</label><br/>
<input type='password' name='password' placeholder='enter password' ref={rpassword} required ></input><br/>
<span style={{color:"red",marginLeft:"7px"}}>{success}</span><br/>
</div>

   



    <input type="submit" value="  Submit" id="submit-login-button"/><br/>
   

    <Link to="/signin"><p style={{fontSize:"20px",textDecoration:"none",marginLeft:"300px"}}>Signup?</p></Link>



</form>

    </div>
  )
}

export default Login