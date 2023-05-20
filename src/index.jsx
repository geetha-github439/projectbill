import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// /import {App} from './App';
import { Login } from './homepage/Login';
import Home from './homepage/Home';
import { Navbar } from './homepage/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/Login" element={<Login/>} />

<Route path="/Home" element={<Home/>} />



</Routes>

</Router>




  </React.StrictMode>
);



