import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index.js";
import PartnersPage from "./pages/PartnersPage";
import TeamPage from "./pages/TeamPage";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/partnerspage" element={<PartnersPage />}/>
          <Route exact path="/teampage" element={<TeamPage />}/>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
