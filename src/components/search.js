import React from 'react';
import './../styles/form.css';

const Search = () => {
    return (
        <form className="search" onSubmit={ (e) => {e.preventDefault()} }>
            <input className="input" type="text"/>
        </form>
    )
};

export default Search;