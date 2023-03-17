import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Project from "./pages/Project";
import ProjectDisplay from "./pages/ProjectDisplay";
import Contact from "./pages/contact";


const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/ajin-portfolio-react/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Router>
    </div>
  )
}



export default App;
