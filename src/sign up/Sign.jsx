import React from 'react'

export const Sign = () => {
  return (
    <div >
        <div id="sign-in">
            <form action="" id="sign-form">
           <tr>
            <td>Email</td>
            <td>:<input type="email" id="sign-input" /></td>
           </tr>
           <tr>
            <td>Password</td>
            <td>:<input type='password' id="sign-input"></input></td>
           </tr>
           <input type="submit" id="sign-submit"></input>
           <p id="forget">Forget Password?</p>
           </form>
           
        </div>
    </div>
  )
}
