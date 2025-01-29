import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import VideoSection from "./components/VideoSection";  // Ensure this is correctly imported

import "./styles/App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header toggleSidebar={() => setIsSidebarOpen(true)} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />

        <main className="lg:ml-64 p-4 lg:p-8 pt-20 lg:pt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/videos" element={<VideoSection />} />
            <Route
              path="/projects"
              element={
                <div className="space-y-8">
                  <h1 className="text-4xl font-bold text-white">All Projects</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
