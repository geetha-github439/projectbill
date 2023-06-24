import React from 'react'
import {useState,useRef,useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

import {Nav} from "../Nav"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';

import DeleteIcon from '@mui/icons-material/Delete';

export const Mainui = () => {
const groupname1=useRef();
const navigate=useNavigate();

const [state,setState]=useState(false)
const [groupName,setGroupName]=useState([])
const [error,setError]=useState("")





 useEffect(()=>{

 axios.get("http://localhost:8000/getpopup").then(res=>{
  
  groupName.current=res.data
 setGroupName(res.data)
  
    
 
   }).catch(err=>{
     throw err;
   })
  
 },[])


 

let handlechange=()=>{

  
  setError("")
  setState(!state)

}
let popUpSubmit=(e)=>{
 
  e.preventDefault();
  
  let abc=groupName.filter((val)=>{
    return val.groupname === groupname1.current.value;
  })
  
  if(abc.length > 0)
  {
    setError("Group name already exist..! ")
     

  }
  else{
    
    setState(!state)
  let randomNum=Math.floor(Math.random() * 100000)
  let data={
        groupname:groupname1.current.value,
        groupid:randomNum
      }
   
   
  
   axios.post("http://localhost:8000/popup",data)
   setGroupName((val)=>[...val,data])
     
  
    }

}

let groupSubmit=(groupname,id,e)=>{
 
  

  
  localStorage.setItem('groupname', groupname);
  localStorage.setItem('id', id);

  
  
 navigate(`/group/${groupname}`)
  
}

let closePopUp=()=>{
  setState(!state)
}

let deleteFunction=(groupid)=>{
  
let a=window.confirm("delete confirm")
if(a)
{

  

 
  setGroupName(groupName.filter((val)=>val.groupid !== groupid));
  
  let data={
    groupid: groupid
  }
  axios.post("http://localhost:8000/delete",data)

  
  
}
  
}
let data;


  return (
    <div id="ui">
    <Nav/>
    <div>
    
        {state?
        
          <div id="pop-up">
        <CloseIcon id="close-icon" onClick={closePopUp}/>
            <div id="pop-up-content">
           <form action="" onSubmit={popUpSubmit}>
            <h3>Create Group :</h3><br/>  
            <input type="text" ref={groupname1} maxLength={12} placeholder='Create Group'autoFocus/><br/>
            <span style={{color:"red",marginLeft:"15px"}}>{error}</span><br/>
            <input type="submit" id="pop-submit-button"/><br/>
            
            

           </form>
           </div>
       </div>:""}
       <div id="about-app-content">
       <p>Hello, Welcome to billsplitter..!</p>
       <p>Here you can create multiple groups and add expences to their particular groups...!</p>
       </div>
     
       <div id="creategroup" onClick={handlechange}>
           <h4 id="create">Create Group</h4><AddCircleIcon id="plus-icon"/>
       </div>

      
       <h4 style={{marginLeft:"380px",marginTop:"30px",color:"green",fontSize:"22px"}}>Created groups:</h4>
     
       {<div id="groupdiv">
      
        
           {groupName.map((val,index)=> (
            <div key={index} id="groupname" >
            
              <h3 id="grouptext" onClick={()=>{groupSubmit(val.groupname,val.groupid)}} >{val.groupname}</h3>
              
              
             <div  onClick={()=>deleteFunction(val.groupid)}> <DeleteIcon    id="moreverticon" ></DeleteIcon>  </div>
              
            </div>
            )
           )

           }
           
          
          
          </div>}

    


        
        
    </div>
    </div>
  )
}
