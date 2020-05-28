import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductNav from "./Components/ProductNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <ProductNav />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
