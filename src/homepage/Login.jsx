import React from 'react'

const Login = () => {
  return (
    <div className='container'>
<form >
    <h1>Login in</h1>
    <div>
    <label>Username</label><br/>
<input type='text' name='username' placeholder=' enter Username' ></input>
</div>
<div>
    <label>Password</label><br/>
<input type='password' name='password' placeholder='enter password' ></input>
</div>
<div>
    <label>Phone number</label><br/>
<input type='number' name='phone number' placeholder='enter phone number' ></input>
</div>
<div>
<p className='forgot'>Forgot password ?</p>
    <button>Login</button><br/>
    <a href="Signin.jsx">not a member signin here</a>

</div>

</form>

    </div>
  )
}

export default Login