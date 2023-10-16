import React, { useState } from 'react'
import "./Home.css"
import Alert from './Alert';


const Home = () => {

  const [result, setResult] = useState("");
  const [text, setText] = useState("")
  const [res_backcolor, settres_backcolor] = useState("white")
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
      
    }, 2000);
    
}

  const handleOnchange = (event) => {

    const myres = (event.target.value);
    // console.log(myres)
    setText(myres)

  }

  const reverseName = (name) => {
    const reversedName = name.split('').reverse().join('');
    console.log(reversedName)
   
    setResult(reversedName)
  };



  const onClick1 = () => {
    settres_backcolor("gray")
    reverseName(text)
    showAlert("string reversed with gray color", "victory")
   
  }
  const onClick2 = () => {
     settres_backcolor("skyblue")
    reverseName(text)
    showAlert("string reversed with sky bluecolor", "victory")
  }
  const onClick3 = () => {
    settres_backcolor("pink")
    reverseName(text)
    showAlert("string reversed with pink color", "victory")
  }

  const onClick4 = () => {
    settres_backcolor("lightgreen")
    reverseName(text)
    showAlert("string reversed with lightgreen color", "victory")
  }

  const onClick5 = () => {
    settres_backcolor("yellow")
    reverseName(text)
    showAlert("string reversed with yellow color", "victory")
  }


  return (
    
    <div>
      <Alert alert={alert}/>
      {/*  div1 */}
      <div className='div-1'>
        <div className=" mb-3">
          <label htmlFor="My Text Area" className="form-label">
            Example Write Here{" "}
          </label>
          <div >

            <textarea
              className="form-control"
               value={text}
               onChange={handleOnchange}
              id="My Text Area"
              rows="8" placeholder="Enter Text"
            
            ></textarea>

          </div>

        </div>
      </div>

      {/* selection dropdown */}
      <select className="" multiple aria-label="multiple select example">
        <option value="1" onClick={onClick1}>Gray</option>
        <option value="2" onClick={onClick2}>Skyblue</option>
        <option value="3" onClick={onClick3}>Pink</option>
        <option value="4" onClick={onClick4}>Lightgreen</option>
        <option value="5" onClick={onClick5}>Yellow</option>
      </select>

      {/* div-2 */}
      <div className='div-1'>
        <div className=" mb-3">
          <label htmlFor="My Text Area" className="form-label">
            RESULT{" "}
          </label>
          <div style={{backgroundColor:res_backcolor}}>
            {result}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home









