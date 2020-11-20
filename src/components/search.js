import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from './../images/search.png';
import { findTickets, setSearch } from './../actions';

const Search = () => {
    const search = useSelector(state => state.search);
    
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setSearch(e.target.value));
        dispatch(findTickets(e.target.value));
    };

    const searchIconStyle = `url(${SearchIcon})`;

    return (
        <form className="search" onSubmit={ (e) => {e.preventDefault()} }>
            <div className="search-icon" style={{backgroundImage: searchIconStyle, backgroundSize: 'contain'}}></div>
            <input className="input input_search" type="text" onChange={ handleChange } placeholder="Search..." value={search} />
        </form>
    )
};

export default Search;