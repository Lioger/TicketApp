import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTicket } from './../actions';

const DeleteButton = ({ ticketID }) => {
    const dispatch = useDispatch();

    return (
        <div className="delete-wrapper">
            <div className="button_delete button" onClick={ () => dispatch(removeTicket(ticketID)) }>
                Delete ticket
            </div>
        </div>
    )
};

export default DeleteButton;