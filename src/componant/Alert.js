import React from 'react'

export default function Alert(props) {
  return (
    // alert=null----- alert({msg:"Dark mode has been enabled",type:"success"})
  
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{props.alert.type}</strong>: {props.alert.msg}
         
     </div>
 
    
  )
}