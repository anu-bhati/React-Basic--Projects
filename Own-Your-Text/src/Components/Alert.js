import React from 'react'


export default function Alert(props) { 
  const capitalize = (word) => {
    if (word === undefined) {
        return '';
    }
    let w = word.toUpperCase();
    return w;
};
	
  return ( 
	<> 
	 {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong>{capitalize(props.alert.type)}!</strong> {props.alert.msg}
     </div>}
	</> 
  )
} 




