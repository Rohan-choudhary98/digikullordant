<<<<<<< HEAD
import logo from './logo.svg';
 import './App.css';
// import Card from './Card';
 import Datafetch from './Datafetch';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Singlepage from './Singlepage';
=======

import './App.css';
import Datafetch from './Datafetch';
import {  Routes, Route } from "react-router-dom";
import Singlepage from './Singlepage';
>>>>>>> aa927f4839e5f7380f12a6c2083bbc8f9db06ba5


function App() {
  return (
    <div >
      
    {/* <Card/>  */}
       <Routes> 

        <Route path="/" element={<Datafetch />} /> */}
        <Route path="/Singlepage/:id" element={<Singlepage />} /> 


      </Routes> 

    </div>
  );
}

export default App;
