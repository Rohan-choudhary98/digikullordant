
import './App.css';
import Datafetch from './Datafetch';
import {  Routes, Route } from "react-router-dom";
import Singlepage from './Singlepage';


function App() {
  return (
    <div >
      

      <Routes>

        <Route path="/" element={<Datafetch />} />
        <Route path="/Singlepage/:id" element={<Singlepage />} />


      </Routes>

    </div>
  );
}

export default App;
