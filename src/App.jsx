import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

const [mode, setMode] = useState('light');

// const [mode1, setMode1] = useState('light');

const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const toggleMode=()=>{
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled", "success");
    document.title = "TextUtils - Dark Mode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success");
    document.title = "TextUtils - Light Mode"
  }
}

const greenToggleMode=()=>{
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor='#1c3f1c';
    showAlert("Green mode has been enabled", "success");
    document.title = "TextUtils - Green Mode"
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success");
    document.title = "TextUtils - Light Mode"
  }
}


  return (
  <>
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} greenToggleMode={greenToggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3" >
      <Routes>
        <Route>
      
          <Route path="/about"  element={<About mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces"  mode={mode} />} />
         
        </Route>
        </Routes>
      </div>
      </BrowserRouter>

      </>
    

  );


}

export default App;
