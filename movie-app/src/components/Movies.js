import React from 'react';

const img_url = 'https://image.tmdb.org/t/p/w1280';
const Movie = ({title, poster_path,id,vote_average}) => 

    <div className="movie">
        <a href="/DetailScreens/{id}">
            <img src={img_url + poster_path} alt="title" />
        </a>
        <ul>
            <li>
                <h3>{title}</h3>
            </li>
            <li>
                <p>{vote_average}</p>
            </li>
        </ul>
    </div>

export default Movie;  