import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Wheater Dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", 'success');
      document.title = 'TextUtils - DarkMode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", 'success');
      document.title = 'TextUtils - LightMode';
    }
  }
  return (
   <>
    {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
    {/* <Navbar/> */}

    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route path="/About">
            <About />
          </Route>
          <Route path="/">}
            <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/> */}
           {/* <Route exact path="/About" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={ */}
                <TextForm showAlert={showAlert} heading="Enter text" mode={mode} />
              {/* }
            > */}

          {/* </Route>
    </Routes> */}
    </div>
    {/* </Router> */}
   </>
  );
}

export default App;