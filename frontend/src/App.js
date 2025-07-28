import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectValueCanvas from "./components/ProjectValueCanvas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectValueCanvas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;