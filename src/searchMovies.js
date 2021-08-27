import React, { useState } from 'react';
import MovieCard from './MovieCard';

function SearchMovies() {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault();

        // key from tmdb
        const myApiKey = process.env.REACT_APP_TMDB_API_KEY;

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. Spider Man"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default SearchMovies;
