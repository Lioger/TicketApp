import React from 'react';

const InfoHeader = ({ ticket }) => {
    return (
        <div className="infoHeader">
            <div className="ticketNo">
                <span className="label">TICKET NO. </span>
                <span>{ticket.id}</span>
            </div>
            <div className="lastUpd label">
                LAST UPDATED { ticket.details.reported }
            </div>
        </div>    
    )
};

export default InfoHeader;