import React , {useState} from 'react'

export default function Textarea(props) { 
	const handleUpClick = ()=>{ 
       //console.log("Uppercase was clicked" , + text) ; 
	   let newText = text.toUpperCase() ;  
	   setText(newText) ; 
	} 
	const handleLowClick = ()=>{ 
		//console.log("Lowercase was clicked" , + text) ; 
		let newText = text.toLowerCase() ;  
		setText(newText) ; 
	 }
	const handleOnChange = (event)=>{ 
		//console.log("On change") ; 
		setText(event.target.value) ; 
	}
	const [text , setText] = useState('Enter text here') ;
  return ( 
	<>
	<div className = "container">
	    <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="my-Box" rows="8"></textarea>
       </div> 
	   <button className="btn btn-primary mx-2"  onClick = {handleUpClick}>Convert to Uppercase</button> 
	   <button className="btn btn-primary mx-2"  onClick = {handleLowClick}>Convert to Lowercase</button>
	</div>  
	<div className="container my-3">
     <h2>Your text Summary </h2> 
	 <p>{text.split(" ").length} words and {text.length} characters</p> 
	 <p>{0.008 * text.split(" ").length} minutes read</p> 
	 <p>{text}</p>
	</div>
	</>
  )
}
