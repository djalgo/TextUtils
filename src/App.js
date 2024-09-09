import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import Alerts from './Components/Alerts';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark")
  const [alert, setAlert] = useState(null)
  
  const showAlert =(message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 10000);
  }
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("Dark Mode enabled", "success")
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode enabled", "success")
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title ="TextUtils" mode ={mode} toggleMode = {toggleMode}/>
      <Alerts alert = {alert} />
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element = {<TextForm heading = "Enter text to analyze" showAlert = {showAlert}/>}> 
        </Route>
        <Route path="/about" element={<About />}>
          
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
