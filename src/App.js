import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";


const App = () => {
  return (
    <div className="home">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
