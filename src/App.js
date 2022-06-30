import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    // version 1
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // );
    // const json = await response.json();
    // setMovies(json.data.movies);
    // setLoading(false);

    // version 2
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    // nowdays (.then) isn't modern so instead u r using async await
    // fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.data.movies); // get movie infos from fetch url
    //     setLoading(false); // we finhsed loading so we set the setLoading to false
    //   });
    getMovies();
  }, []); // empty array means i'm not watching anybody and i just run only once
  // console.log(movies); // 2 results r showed up in our console bc of setmovies and setloading
  // return <div>{loading ? <h1>Loading...</h1> : movies.map()}</div>;
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>
                {movie.title} ({movie.year})
              </h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li> // everythim when we use map we have to giva a key
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  // map : paint things in our list to the screen -> take the old array and transformed eact item in the array
}

export default App;

//step 1 : useState defulat : true
//step 2 : useEffect -> i want to use this code only once when i jsut run my code

//first commit
// + App.js get some movie infos from fetched url with react and javascript
// react ( useEffect , useState )
// js ( async&await and how to use .then , map() function )
