

 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import Signin from "./Signinpage/Signin"
 import Login from "./loginpage/Login";
import { Home } from "./homepage/Home";
import {Mainui} from "./mainpage/Mainui"
import {Group} from "./mainpage/Group"
import { Protect, protect } from "./homepage/protect";
//import { Navbar,Body } from "./components/Navbar";
function App() {
  return (
    <div>
     <BrowserRouter>
  
    <Routes>
    <Route path="/group/:id" element={<Protect child={<Group/>}/>}/> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Protect child={<Mainui/>} />}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
