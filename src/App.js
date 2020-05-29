import React from "react";
import "./App.css";
import ProductNav from "./Components/ProductNav";
import MainNav from "./Components/MainNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <ProductNav />
        <MainNav />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
