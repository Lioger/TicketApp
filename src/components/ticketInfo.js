import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfoHeader from './infoHeader';
import Owner from './owner';
import Details from './details';
import Asset from './asset';

const TicketInfo = () => {
    const ticketsArr = useSelector(state => state.tickets);

    const dispatch = useDispatch();

    const choosenTicketArr = ticketsArr.filter( (ticket) => ticket.choosen )
    const ticket = choosenTicketArr[0]

    return (choosenTicketArr.length) ? (
        <div className="ticket-info">
            <InfoHeader />
            <Owner owner={ticket.owner} />
            <Details details={ticket.details} />
            <Asset asset={ticket.asset} /> 
        </div>
    ) : (
        <div className="ticket-info ticket-info_empty">
            <div className="cross">x</div>
            <div className="text">No ticket selected</div>
        </div>
    );
};

export default TicketInfo;