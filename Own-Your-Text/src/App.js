import React , {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar' ;  
import Alert from './Components/Alert' ;
import Textarea from './Components/Textarea' ; 
import About from './Components/About' ; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 

function App() { 

  const [mode , setMode] = useState("light") 
  const [alert , setAlert] = useState("null")  
  
  const showAlert = (message , type)=>{ 
       setAlert({ 
          msg : message , 
          type : type 
       }) 
       setTimeout(() => {
        setAlert(null);
    }, 1500);
  } 

  const toggleMode = ()=>{ 
    if(mode === 'light'){ 
      setMode('dark');  
      document.body.style.backgroundColor = '#042743'; 
      showAlert("Dark mode has been enabled", "success"); 
    }
    else{ 
     setMode('light') ;  
     document.body.style.backgroundColor = 'white'; 
     showAlert("Light mode has been enabled", "success");  
    }
  }
  return (
   <> 
   <Router> 
   <Navbar title = "Textutils" about = "About Us" mode = {mode} toggleMode = {toggleMode} /> 
   <Alert alert = {alert}/>
   <div className = "container my-3"> 
   <Routes>
        <Route path="/" element={<Textarea heading = "Enter the text to analyze" mode = {mode} showAlert = {showAlert} />} />
        <Route path="/About" element={<About />} />
      </Routes>  
	 </div> 
   </Router>
   </>
  );
}

export default App;
