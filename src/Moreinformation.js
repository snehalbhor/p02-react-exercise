import React,{useState}from 'react'

const Moreinformation = () => {

const[input, setInput]= useState("")
const[filledinput, setFilledinput]= useState("")
const[message, setMessage]= useState("")

const handleOnchange=(event)=>{
  setInput(event.target.value);
  setFilledinput(event.target.value);
}

const handleSubmit=(event)=>{
  event.preventDefault();
  if (filledinput.length > 5) {
    setMessage("success")
  } else {
    setMessage("error")
  }
};


  return (
    <div>
       <div className='div-about1'>
        <form  onSubmit={handleSubmit}>
          <label>
            Input:
            <input type="input"placeholder="Enter your input" value={input} 
            onChange={handleOnchange}/>
          </label>
          <button type="submit" >Submit</button>
        </form>
        <div>
        {message && (
          <div className={filledinput.length > 5 ? 'success' : 'error'}>{message}</div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Moreinformation
