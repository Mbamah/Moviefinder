import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./SearchMovies.css";

// add loading state


function SearchMovies() {
    // states = input query, movies
    const [query, setInquery] = useState(" ");
    const [movies, setMovies] = useState([ ])
    // const [loading, setLoading] = useState(true)
  
    function getValue(e) {
        setInquery(e.target.value)
        console.log(e);   
    }

    // SearchMovies function
    const SearchMovies = async (e) => {
    e.preventDefault();
    const api_key = "b9b203ed2793869778298fecd5d7a0ca";
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}`;
    try {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results)
      setInquery(' ')

      // if(data.results === ''){
      //   console.log('empty');
      // }
      
    } catch (error) {
      console.error(error);
    }
  }

  
 
  return (
    <>
      <form className="form" onSubmit={SearchMovies}>
        <label htmlFor="query" className="label">
          Movie Name:
        </label>
        <input
          type="text"
          name="query"
          value={query}
          // onChange={(e)=> setInquery(e.target.value)}
          onChange={getValue}
          placeholder="life in a year"
          // placeholder="e.g. Captain Marvel"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card--list">
        <h2 className="count">{movies.length} Found</h2>
        {/* <h2 className="count">{movies.length} no match</h2> */}
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
 
}
export default SearchMovies;
