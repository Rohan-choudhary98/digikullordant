import logo from './logo.svg';
 import './App.css';
// import Card from './Card';
 import Datafetch from './Datafetch';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Singlepage from './Singlepage';


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
