import React from 'react';
import { useSelector } from 'react-redux';
import InfoHeader from './infoHeader';
import Owner from './owner';
import Details from './details';
import Asset from './asset';
import DeleteButton from './delete';

const TicketInfo = ({ match }) => {
    const ticketsArr = useSelector(state => state.tickets);
    const ticket = ticketsArr.filter( (ticket) => ticket.id === Number(match.params.id))[0];

    return (
        <div className="ticket-info">
            <InfoHeader ticket={ticket} />
            <Owner owner={ticket.owner} />
            <Details details={ticket.details} />
            <Asset asset={ticket.asset} /> 
            <DeleteButton ticketID={ticket.id} />
        </div>
    )
};

export default TicketInfo;