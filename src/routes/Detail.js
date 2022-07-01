import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <a href="../">&larr; Go Back Home</a>
          <br />
          <img src={movie.medium_cover_image} />
          <h2>{movie.title}</h2>
          <h5>{movie.year} </h5>
          <h5>{movie.runtime}mins </h5>
          <h4>
            Grade⭐️{movie.rating} Likes {movie.like_count}👍🏻
          </h4>
          <h4>gernres</h4>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <h4>scripts :</h4>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
