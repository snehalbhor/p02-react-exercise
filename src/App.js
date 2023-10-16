// import logo from './logo.svg';
import './App.css';
import Moreinformation from './Moreinformation';
import About from './componant/About';
import Alert from './componant/Alert';
import Contactus from './componant/Contactus';
import General from './componant/General';
import Home from './componant/Home.js';
import Links from './componant/Links';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Alert/>
      <Router>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/moreinformation" element={<Moreinformation />}/>
          <Route path="/contactus" element={< Contactus/>}/>
          <Route path="/links" element={<Links/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
