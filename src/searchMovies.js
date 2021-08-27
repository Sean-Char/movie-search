import React from 'react';

export default function searchMovies() {
    return (
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. RoboCop"/>
            <button className="button">Search</button>
        </form>
    )
}