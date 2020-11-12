import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTicketForm from './addTicketForm';
import InfoHeader from './infoHeader';
import Owner from './owner';
import Details from './details';
import Asset from './asset';
import DeleteButton from './delete';

const TicketInfo = () => {
    const ticketsArr = useSelector(state => state.tickets);
    const addButtonClicked = useSelector(state => state.addButton);

    const dispatch = useDispatch();

    const ticket = ticketsArr.filter( (ticket) => ticket.choosen )[0];
    let output = '';

    if (addButtonClicked) {
        output = <AddTicketForm />
    } else if (ticket) {
        output = <div className="ticket-info">
            <InfoHeader />
            <Owner owner={ticket.owner} />
            <Details details={ticket.details} />
            <Asset asset={ticket.asset} /> 
            <DeleteButton ticketID={ticket.id} />
        </div> 
    } else {
        output = <div className="ticket-info ticket-info_empty">
            <div className="cross">x</div>
            <div className="text">No ticket selected</div>
        </div>
    };

    return output;
};

export default TicketInfo;