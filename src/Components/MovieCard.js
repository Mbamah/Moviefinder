import React from 'react';
import './MovieCard.css'

function MovieCard({movie}) {
    return(
        <div className='card'>
            <img className='card--image' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
            alt={movie.title + ' poster '}/>

            <div className='card--content'>
                <h3 className='card--title'>{movie.title}</h3>
                <p><small>RELEASE DATE :</small> {movie.release_date}</p>
                <p><small>RATING :</small> {movie.vote_average}</p>
                <h4>Overview</h4>
                <p className='card--desc'>{movie.overview}</p>
            </div>

        </div>
    )
}
export default MovieCard