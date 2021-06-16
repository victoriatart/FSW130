import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
//import { AddMovie } from "./features/movie/AddMovie";
//import { EditMovie } from "./features/movie/EditMovie";

import React from "react";
import { MovieList } from "./features/movie/MovieList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-movie">
            <h1> Add Movie </h1>
          </Route>
          <Route path="/edit-movie">
            <h1>Edit Movie</h1>
          </Route>
          <Route path="/">
            <MovieList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
