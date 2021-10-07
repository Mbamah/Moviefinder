import React from 'react';
import './MovieCard.css'

function MovieCard({movie}) {
    return (
      <div className="card">
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster "}
        />

        <div className="card--content">
          <h3>
            Title: <small>{movie.title}</small>
          </h3>
          <h3>
            Release Date : <small>{movie.release_date}</small>
          </h3>
          <h3>
            Rating : <small> {movie.vote_average}/10</small>
          </h3>
          <h3>
            Story Line:<p className="card--desc">{movie.overview}</p>
          </h3>
        </div>
      </div>
    );
}
export default MovieCard