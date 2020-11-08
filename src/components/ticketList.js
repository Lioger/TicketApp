import React from 'react';
import TicketItem from './ticketItem';
import { useSelector, useDispatch } from 'react-redux';

const ticketList = () => {
    const ticketsArr = useSelector(state => state.tickets);

    const dispatch = useDispatch();

    const tickets = (ticketsArr.length) ? (
        ticketsArr.map(({ status, asset, reported, owner, ownerPhoto, choosen, id }) => {
            return <TicketItem
                    choosen={choosen} 
                    status={status}
                    asset={asset}
                    reported={reported}
                    ownerPhoto={ownerPhoto}
                    id={id}
                    key={id} 
                    />;
        })
    ) : null;
    return (
        <div className="tickets-list">
            <div className="row-wrap">
                <div className="list__item list__item_heading">
                    <div>OWNER</div>
                    <div>REPORTED</div>
                    <div>ASSET</div>
                    <div>STATUS</div>
                </div>
            </div>
            { tickets }
        </div>
    )
};

export default ticketList;