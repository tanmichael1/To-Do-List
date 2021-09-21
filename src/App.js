import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import TodosLists from "./pages/TodoLists";
import { IoIosCheckmarkCircle } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={TodosLists} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
