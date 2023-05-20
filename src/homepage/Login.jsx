import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

  export const Login = () => {

    // const navigate=useNavigate();
  return (
    <div className='container'>
<form >
    <h1 className="g">Login in</h1>
    <div>
    <label className='il'>Username</label><br/>
<input type='text' name='username' placeholder=' enter Username' ></input>
</div>
<div>
    <label className='il'>Password</label><br/>
<input type='password' name='password' placeholder='enter password' ></input>
</div>
<div>
    <label className='il'>Phone number</label><br/>
<input type='number' name='phone number' placeholder='enter phone number' ></input>
</div>
<div>
<p className='forgot'>Forgot password ?</p>
    <button >Login</button><br/>
    <Link to='/signin'><a href="Signin.jsx" class="si">not a member signin here</a></Link>

</div>

</form>

    </div>
  )
}

