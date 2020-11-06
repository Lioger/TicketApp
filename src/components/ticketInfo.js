import React from 'react';
import InfoHeader from './infoHeader';
import Owner from './owner';
import Details from './details';
import Asset from './asset';
import './../styles/ticketInfo.css';

const TicketInfo = () => {
    const ticket = { owner: { avatar: 'photo', nameSurname: 'Clark Kent', profession: 'Electrician' }, 
                    details: { reported: 'date', status: 'status', description: 'Ticket description' },
                    asset: { name: 'Switch warming', geocode: '137', location: '2.900 19.100' }  };
    console.log(ticket);
    return (ticket) ? (
        <div className="ticketInfo">
            <InfoHeader />
            <Owner ownerInfo={ticket.owner} />
            <Details detailsInfo={ticket.details} />
            <Asset assetInfo={ticket.info} /> 
        </div>
    ) : (
        <div className="ticketInfo empty">
            <div className="cross">x</div>
            <div className="text">No ticket selected</div>
        </div>
    );
};

export default TicketInfo;