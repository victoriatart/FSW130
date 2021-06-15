import React, { useState } from "react";
import Movie from "./Movie";

const MovieContext = React.createContext([{ title: "Superbad" }]);

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Superbad",
    },
    {
      title: "Pineapple Express",
    },
    {
      title: "The Interview",
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      <Movie />
    </MovieContext.Provider>
  );
}

export {App, MovieContext}
