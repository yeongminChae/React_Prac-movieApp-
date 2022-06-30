import propTypes from "prop-types";
import { Link } from "react-router-dom";
// link is the component which helps send us to the other page without refresh
function Movie({ coverImg, title, year, summary, genres }) {
  // Movie.js:8 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
  // -> function Movie( coverImg, title, year, summary, genres ) My original code which caused the error
  // i have to use the Curly Brackets for covering the those props
  // ('{' coverImg, title, year, summary, genres '}')
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">
          {title} ({year})
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
