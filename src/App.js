import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <h1>Nexus build</h1>
      {/* Header */}
      <Header />

      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React-router */}
      </div>
    </div>
  );
}

export default App;
