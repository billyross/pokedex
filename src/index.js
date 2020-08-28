import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonListView from "./components/PokemonListView";
import PokemonDetailView from "./components/PokemonDetailView";
import "./global.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details/:name">
          <PokemonDetailView />
        </Route>
        <Route path="/">
          <PokemonListView />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
