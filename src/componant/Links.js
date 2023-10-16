import React, { useState } from 'react'


const Links = () => {
  const [text, setText] = useState("");
  const [password, setpassword] = useState("");
  const [result, setresult] = useState("")

  // const[msg, setMsg]=useState();

  const onChangetext = (e) => {
    // console.log(text)
    setText(e.target.value);
    // console.log(text)


  };

  const onChangepassword = (e) => {
    // console.log(password)
    setpassword(e.target.value);
    // console.log(password)


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length < 5 || password.length < 5) {
      setresult("Error")
    }
    else {
      setresult("success")
    }
  }
  return (
    <div>
      <form >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="input"
            className="form-control"
            id="email"
            name="email"
            value={text}
            onChange={onChangetext}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">

          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="input"
            className="form-control"

            id="password"
            name="password"
            value={password}
            onChange={onChangepassword}
          />
        </div>

        <button type="button" onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>{result}</div>
    </div>
  )
}

export default Links
