
import './App.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Bpcscore from './components/Bpcscore'
import Services from './components/Services'
import Contact from './components/Contact'
import Resources from './components/Resources'
import { Data } from "./components/Data"



const App = () => {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/home' element ={<Home />}></Route>
          <Route path='/Resources' element ={<Resources />}></Route>
          <Route path='/Bpcscore' element ={<Bpcscore />}></Route>
          <Route path='/Services' element ={<Services />}></Route>
          <Route path='/Contact' element ={<Contact />}></Route>
          <Route path='/Login' element ={<Login />}></Route>
          
          

        </Routes> 
      </Router>

      </>
    
    
  );
}

export default App;
