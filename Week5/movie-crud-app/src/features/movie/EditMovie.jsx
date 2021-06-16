import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";

import { useState } from "react";
import { movieUpdated } from "./moviesSlice";

export function EditMovie() {
  const { pathname } = useLocation();
  const movieId = pathname.replace("/edit-movie/", "");

  const movie = useSelector((state) =>
    state.movies.find((movie) => movie.id === movieId)
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("movie.name");
  const [rating, setRating] = useState("movie.rating");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleRating = (e) => setRating(e.target.value);

  const handleClick = () => {
    if (name && rating) {
      dispatch(
        movieUpdated({
          id: movieId,
          name,
          rating,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setRating("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit movie</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Movie Name Here"
            id="nameInput"
            onChange={handleName}
            value={name}
          />

          <label hmtlFor="ratingInput">Rating</label>
          <input
            className="u-full-width"
            type="rating"
            placeholder="Is it worth 5 stars?"
            id="ratingInput"
            onChange={handleRating}
            value={rating}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Save movie
          </button>
        </div>
      </div>
    </div>
  );
}
