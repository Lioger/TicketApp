import React from 'react';
import './../styles/details.css';

const Details = () => {
    return (
        <div className="details infoBlock">
            <div className="blockTitle">Details</div>
            <div className="content">
                <div className="reportedWrapper">
                    <div className="label">Reported</div>
                    <div className="reportedDate info">25/07/2019 23:55</div>
                </div>
                <div className="statusWrapper">
                    <div className="label">Status</div>
                    <div className="status UNA info">UNA</div>
                </div>
                <div className="descriptionWrapper">
                    <div className="label">Description</div>
                    <div className="description info">Ticket description</div>
                </div>
            </div>
        </div>
    )
};

export default Details;