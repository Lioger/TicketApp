import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TicketItem from './ticketItem';

const ticketList = () => {
    const ticketsArr = useSelector(state => state.tickets);

    const dispatch = useDispatch();

    const tickets = (ticketsArr.length) ? (
        ticketsArr.map(({ owner, details, asset, choosen, id, hidden }) => {
            return <TicketItem
                    ownerPhoto={owner.photo}
                    reported={details.reported}
                    asset={asset.name}
                    status={details.status}
                    choosen={choosen}
                    hidden={hidden} 
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