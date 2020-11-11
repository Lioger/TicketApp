import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTicket } from './../actions';

const DeleteButton = ({ ticketID }) => {
    const dispatch = useDispatch();

    return (
        <div className="delete-wrapper">
            <div className="button_deleteTicket button" onClick={ () => dispatch(removeTicket(ticketID)) }>
                Delete Ticket
            </div>
        </div>
    )
};

export default DeleteButton;