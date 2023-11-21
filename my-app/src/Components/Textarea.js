import React , {useState} from 'react'

export default function Textarea(props) { 
	const handleUpClick = ()=>{ 
       //console.log("Uppercase was clicked" , + text) ; 
	   let newText = text.toUpperCase() ;  
	   setText(newText) ;  
	   props.showAlert("Converted to uppercase!", "success");
	} 
	const handleLowClick = ()=>{ 
		//console.log("Lowercase was clicked" , + text) ; 
		let newText = text.toLowerCase() ;  
		setText(newText) ; 
		props.showAlert("Converted to lowercase!", "success");
	 }
	const handleOnChange = (event)=>{ 
		//console.log("On change") ; 
		setText(event.target.value) ; 
	} 
	const clearText = ()=>{ 
		//console.log("Uppercase was clicked" , + text) ; 
		let newText = '' ;  
		setText(newText) ; 
		props.showAlert("Text cleared!", "success");
	 } 
	const [text , setText] = useState('Enter text here') ;
  return ( 
	<>
	<div className = "container" style={{color: props.mode==='dark'?'white':'#042743'}}>
	    <h1 className = "mb-4">{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{color: props.mode==='dark'?'white':'#042743' , backgroundColor: props.mode==='dark'?'#13466e':'white'}} id="my-Box" rows="8"></textarea>
       </div> 
	   <button className="btn btn-primary mx-2"  onClick = {handleUpClick}>Convert to Uppercase</button> 
	   <button className="btn btn-primary mx-2"  onClick = {handleLowClick}>Convert to Lowercase</button> 
	   <button className="btn btn-primary mx-2"  onClick = {clearText}>Clear Text</button>
	</div>  
	<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h2>Your text Summary </h2> 
	 <p>{text.split(" ").length} words and {text.length} characters</p> 
	 <p>{0.008 * text.split(" ").length} minutes read</p> 
	 <p>{text}</p>
	</div>
	</>
  )
}
