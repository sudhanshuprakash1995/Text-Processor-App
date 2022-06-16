import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = ( message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout( () => {
        setAlert(null);
      },2000);
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert(" Dark mode is active","success");

    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode is active","success");
    }
  }

  return (
  
    <div >
        <Router>
          <Navbar  mode={mode} toggleMode={toggleMode} />
          <Alert  alert={alert}/>
        
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
          </Routes>
        </Router>

  
  {/* <TextForm heading="Enter text for processing" mode={mode} showAlert={showAlert}/> */}
  {/* <About /> */}
</div>
  
  );
}

export default App;
