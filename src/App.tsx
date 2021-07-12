import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import RouteContent from "./components/routeContent";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Sidebar />
        <RouteContent />
      </Router>
    </div>
  );
}

export default App;
