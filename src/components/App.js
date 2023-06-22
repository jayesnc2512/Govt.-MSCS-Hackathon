import React, {useState} from 'react';
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import '../App.css';
import Sidebar from './Sidebar'; 
import Navbar from "./Navbar";
import DashboardDefault from './DashboardDefault';
import Charts from './Charts';
import Analytics from './Analytics';
import Pdf from './Pdf';
import StatePdf from './StatePdf'
import RegForm from './RegForm'



function App() {
  


  return (
    <div>
    <BrowserRouter>
    
      <Routes>
          <Route exact path="/" element={<DashboardDefault  />}/>
          <Route path="/charts" element={<Charts />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/pdf" element={<Pdf />} />
          <Route path="/pdf/:state" element={<StatePdf />} />
          <Route path="/registration" element={<RegForm />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
