import React from 'react';
import TicketItem from './ticketItem';
import './../styles/ticketList.css';

const ticketList = () => {
    const ticketsArr = [{status: "ASD", asset: "Sign"}, {status: "COM", asset: "Switch"}, {status: "UNA", asset: "Bridge"} ];
    const tickets = (ticketsArr.length) ? (
        ticketsArr.map(({ status, asset }) => {
            return <TicketItem status={status}
                    asset={asset} 
                    />;
        })
    ) : null;
    return (
        <div className="ticketList">
            <div className="cellWrap">
                <div className="listItem heading">
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