import React from 'react'
import { Navigate } from 'react-router-dom';

export const Protect = ({child}) => {
    const userId=localStorage.getItem("userid");
    
  return (
    <>
    {userId ? child :<Navigate to="/login" replace   />}
    </>
  )
}
