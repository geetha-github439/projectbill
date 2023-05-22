import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {App} from './App';
import { Login } from './homepage/Login';
// import Home from './homepage/Home'
import {Body} from './homepage/Body';
 import { Navbar } from './homepage/Navbar';
import {Signin} from './Signin/Signin';
// import InputForm from './pages/InputForm';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' 

  import Todo from './pages/Todo';
 import AddExpense from './pages/AddExpense';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>
   {/* <InputForm/> */}

  <Navbar />  
  {/* <Todo/>  */}
<Routes> 

 <Route path="/" element={<Navbar/>} />   
 <Route path="/signin" element={<Signin/>} />

<Route path="/Login" element={<Login/>} />
<Route path="/todo" element={<Todo/>} />
<Route path="/body" element={<Body/>} />
<Route path="/signin" element={<Signin/>} />
<Route path="/login" element={<Login/>} /> 
<Route path="/addexpense" element={<AddExpense/>} />

</Routes>

</Router>
 </React.StrictMode>
);



