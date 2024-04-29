import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import Resume from "./Resume/Resume";
import Projects from "./Projects";
import Contact from "./Contact/Contact";

const App: React.FC = () => (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
  );

export default App;
