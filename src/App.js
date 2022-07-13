import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // {import something specific}

// import CSS Styles 
import "./App.css"

// Importing page files 
import HomePage from './pages/HomePage.js';
import ContactPage from './pages/ContactPage.js';
import PokedexPage from './pages/PokedexPage.js';


// Importing page components  <Route path = "/PageTemplate" component = {PageTemplate} />
import NavHeader from "./components/NavHeader.js";

function App() {
  
  // The return can only export 1 element. You can bundle multiple elements using a cluster
  return (
    <Router>
      <div className = "App">

        <NavHeader />        

        <Routes>
          <Route path = "/" exact element = { < HomePage /> } />  
          <Route path = "/ContactPage" element = { < ContactPage /> } />  
          <Route path = "/PokedexPage" element = { < PokedexPage /> } />  

        </Routes>

      </div>

    </Router>        
  );
}

export default App; // I export to the screen. This gets sent to index.js
// without exporting the APP, nothing gets displayed on screen. 