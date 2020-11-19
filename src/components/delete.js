import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeTicket } from './../actions';

const DeleteButton = ({ ticketID }) => {
    const dispatch = useDispatch();

    return (
        <div className="delete-wrapper">
            <Link to={'/'} className="link">
                <div className="button_deleteTicket button" onClick={ () => dispatch(removeTicket(ticketID)) }>
                    Delete Ticket
                </div>
            </Link>
        </div>
    )
};

export default DeleteButton;