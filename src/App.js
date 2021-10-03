import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import TodosLists from "./pages/TodoLists";

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
