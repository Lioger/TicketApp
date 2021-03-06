import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTickets, addButtonClick } from './../actions';
import { Link } from 'react-router-dom';

const addTicket = () => {
    const ticketsArr = useSelector(state => state.tickets);

    const unchoosenTicketsArr = ticketsArr.map( (ticket) => { return {...ticket, choosen: false} } );

    const dispatch = useDispatch();

    return (
        <div className="add-wrapper">
            <Link to={'/addTicket'} className="link">
                <div className="button_addTicket button" onClick={ (e) => { dispatch(addButtonClick(true)); dispatch(setTickets(unchoosenTicketsArr)) } }>
                    Add Ticket
                </div>
            </Link>
        </div>
    )
};

export default addTicket;