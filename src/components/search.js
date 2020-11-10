import React from 'react';
import SearchIcon from './../images/search.png';

const Search = () => {
    const searchIconStyle = `url(${SearchIcon})`;

    return (
        <form className="search" onSubmit={ (e) => {e.preventDefault()} }>
            <div className="search-icon" style={{backgroundImage: searchIconStyle, backgroundSize: 'contain'}}></div>
            <input className="input" type="text"/>
        </form>
    )
};

export default Search;