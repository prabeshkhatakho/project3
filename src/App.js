
import './App.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Services from './components/Services'



const App = () => {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element ={<Home />}></Route>
          <Route path='/home' element ={<Home />}></Route>
          <Route path='/about' element ={<About />}></Route>
          <Route path='/services' element ={<Services />}></Route>
          <Route path='/skills' element ={<Skills />}></Route>
          <Route path='/contact' element ={<Contact />}></Route>

        </Routes> 
      </Router>

      </>
    
    
  );
}

export default App;
