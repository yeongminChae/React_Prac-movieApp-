import propTypes from "prop-types";

// function Movie(props1 , props2 , props3 ... ) {
function Movie(coverImg, title, year, summary, genres) {
  // movie component is get those props infos from the parent component
  return (
    <div>
      {/* <div key={movie.id}> we don't need key */}
      <img src={coverImg} alt={title} />
      {/* img elements has the alt properties */}
      <h2>
        {title} ({year})
      </h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired, // array of string
};

export default Movie;
