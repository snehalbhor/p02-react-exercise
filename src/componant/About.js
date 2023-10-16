import React, { useState } from 'react'
import "./About.css"

const About = () => {
// for email
const [email, setEmail]= useState("")
const [EmailFilled, setEmailFilled] = useState("");
const [message, setMessage] = useState('');

//  for password
const[pass, setPass]= useState("")
const[passFilled, setPassFilled]= useState("")
const[msg, setMsg]= useState("")



// for email
const handleOnchange=(event)=>{
  // const newEmail = event.target.value;
    setEmail(event.target.value);
    setEmailFilled(event.target.value);
}


// for password
const handleOnchange1=(e) =>{
  setPass(e.target.value);
  setPassFilled(e.target.value)
}


// for email
const handleSubmit = (e) => {
      e.preventDefault();
      if (EmailFilled) {
        
        setMessage('Success');
      } else {
        
        setMessage('Error');
      }
    };


    // for password
const handleSubmit1 =(e)=>{
  e.preventDefault();
  if (passFilled) {
    setMsg("success")
  } else{
    setMsg("error")
  }
}
  return (
    <div >
      <div className='div-about1'>
        <form onSubmit={handleSubmit} >
          <label>
            Email:
            <input type="input"placeholder="Enter your email" value={email}
            onChange={handleOnchange}/>
          </label>
          <button type="submit" >Submit</button>
        </form>
        <div>
       {message && (
          <div className={EmailFilled ? 'success' : 'error'}>{message}</div>
        )}
        </div>
      </div>

      <div className='div-about1'>
        <form onSubmit={handleSubmit1} >
          <label>
            Password:
            <input type="password"placeholder="Enter your email" value={pass}
            onChange={handleOnchange1}/>
          </label>
          <button type="submit" >Submit</button>
        </form>
        <div>
       {msg && (
          <div className={passFilled ? 'success' : 'error'}>{msg}</div>
        )}
        </div>
      </div>



    </div>
  )
}

export default About





























































































































