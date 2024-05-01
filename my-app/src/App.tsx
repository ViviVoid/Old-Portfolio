import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import SideNavigationBar from "./SideNavigationBar";

const App: React.FC = () => (
      <BrowserRouter>
          <div id={"sideBar"}>
              <SideNavigationBar />
          </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
  );

export default App;
