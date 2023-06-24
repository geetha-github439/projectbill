import { useState, useEffect } from "react";
import { useRef } from "react"

import { Link, useNavigate } from "react-router-dom"
import axios from "axios"



function Signin () {
  const [formErrors, setFormErrors] = useState({});
  
  const [registerInfo,setRegisterInfo]=useState([])
  const [error,setError]=useState({userid:"",password:""})

  let navigate = useNavigate();
 
  let rname = useRef();
  let remail = useRef();
  let rpassword = useRef();
  const handleSubmit =  (e) => {
    e.preventDefault();
  
  setFormErrors("");
  
  let name = rname.current.value;
  let email = remail.current.value;
  let password = rpassword.current.value;
  if(password.length>4)
  {
  let data = {
    name: name,
    email: email,
    password: password
  }
    
    if(name !== "" && email !== "" && password !== "")
    {
      let abc=registerInfo.filter((val)=>{
        return val.userid === name;
      })
      
      if(abc.length > 0)
      {
        setError({userid:"Userid already exist..! "})
         
    
      }
      else{
      navigate('/login')
    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    
     
    }} 
    
    }
    else{
       setError({password:"Password should be more than 4 charectors "})
    }
   
 
};

  useEffect(() => {
    axios.get("http://localhost:8000/signinfo").then((res)=>{
      setRegisterInfo(res.data)
    })
  }, [formErrors]);

  






  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3 style={{marginLeft:"170px"}}>Sign Up</h3>
      
        <div className="ui form">
          <div className="field">
            <label>UserID:</label><br />
            <input
              type="text"
              name="username"
              placeHolder="Create Userid"
            
               ref={rname} 
              maxLength={12}
              required
              autoFocus
            /><br/>
            <span style={{color:"red",marginLeft:"15px"}}>{error.userid}</span>
          </div>
          
          <div className="field">
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              placeholder="Enter  Email"
              
              ref={remail}
              required
            /><br/>
            
          </div>
         
          <div className="field" style={{marginTop:"14px"}}>
            <label>Create Password:</label><br />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              
               ref={rpassword}
               
               required
            /><br/>
          </div>
          <p style={{marginLeft:"8px"}}>{error.password}</p>
          <input type="submit" id="submit-sign-button" value="submit"/>
        </div>
        <Link to="/login" className="lo">Already a member ?  <span style={{fontSize:"17px",color:"red"}}>Login Here</span></Link>
      </form>
    </div>
  );
}

export default Signin;
