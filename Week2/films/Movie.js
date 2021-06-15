import { useContext, useState } from "react";
import { MovieContext } from "./App";

function Movie({ title }) {
  const [inputVal, setInputVal] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const renderMovies = () => {
    return movies.map((movie) => <div>{movie.title}</div>);
  };

  return (
    <div>
      {renderMovies()}
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></input>
      <button onClick={() => {

       setMovies([...movies, { title: inputVal }])
       setInputVal("")}}>
        Add Movie
      </button>
    </div>
  );
}

export default Movie;
