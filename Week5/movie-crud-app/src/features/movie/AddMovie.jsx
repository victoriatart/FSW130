import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { movieAdded } from "./moviesSlice";

export function AddMovie() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleRating = (e) => setRating(e.target.value);

  const moviesAmount = useSelector((state) => state.movies.lenght);

  const handleClick = () => {
    if (name && rating) {
      dispatch(
        movieAdded({
          id: moviesAmount + 1,
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
        <h1>Add Movie</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label for="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Movie Name Here"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label for="ratingInput">Rating</label>
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
            Add movie
          </button>
        </div>
      </div>
    </div>
  );
}
