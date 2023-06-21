import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../App.css';
import Sidebar from './Sidebar'; 
import Navbar from "./Navbar";
import DashboardDefault from './DashboardDefault';
import Charts from './Charts';
import Analytics from './Analytics';
import Pdf from './Pdf';
import SavePdf from './SavePdf';



function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/pdf" element={<SavePdf />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
