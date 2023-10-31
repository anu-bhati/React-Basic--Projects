
import './App.css';
import Navbar from './Components/Navbar' ; 
import Textarea from './Components/Textarea' ;

function App() {
  return (
   <> 
   
   <Navbar title = "Textutils" about = "About Us" /> 
   <div className = "container my-3"> 
	 <Textarea heading = "Enter the text to analyze" />
	 </div> 
  
   </>
  );
}

export default App;
