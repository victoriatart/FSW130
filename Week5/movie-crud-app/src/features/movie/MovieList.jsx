import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function MovieList() {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD Movie app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button className="button-primary">Load movies</button>
        </div>
        <div className="two columns">
          <Link to="/add-movie">
            <button className="button-primary">Add movie</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name of Movie</th>
              <th>Movie Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(({ id, name, rating }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{rating}</td>
                <td>
                  <button>Delete</button>

                  <Link to={`/edit-movie/${id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
