import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title, year, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title} ({year})
        </Link>
      </h2>
      <h4>Genres : </h4>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>
        {summary.length <= 250 ? (
          summary
        ) : (
          <div>
            {summary.substring(0, 250)} ...
            <Link to={`/movie/${id}`}> more? click here! </Link>
          </div>
        )}
      </p>
    </div>
  );
};

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
