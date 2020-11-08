import React from 'react';

const Search = () => {
    return (
        <form className="search" onSubmit={ (e) => {e.preventDefault()} }>
            <input className="input" type="text"/>
        </form>
    )
};

export default Search;