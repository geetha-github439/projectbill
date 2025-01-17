import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


 export function Signin() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
       {/* {Object.keys(formErrors).length === 0 && isSubmit}  {
        <div className="ui message success">Signed in successfully</div>} */}


      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label> create Username</label><br/>
            <input
            className="inp"
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="e">{formErrors.username}</p>
          <div className="field">
            <label> create Email</label><br/>
            <input className="inp"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="e">{formErrors.email}</p>
          <div className="field">
            <label> create Password</label><br/>
            <input
            className="inp"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className="e">{formErrors.password}</p>
          <button className="sb">Submit</button>
        </div>
        <Link to='/login'><a href="Login.jsx" className="lo">Already a member ?  Login Here</a></Link>
      </form>
    </div>
  );
}


