import React from 'react';

const Details = ({ detailsReportedDate, detailsStatus }) => {
    const statusClass = `status ${ detailsStatus }`;

    return (
        <div className="details info-block">
            <div className="info-block__title">Details</div>
            <div className="info-block__content">
                <div className="reported-wrapper">
                    <div className="label">Reported</div>
                    <div className="reportedDate info-parts">{ detailsReportedDate }</div>
                </div>
                <div className="status-wrapper">
                    <div className="label">Status</div>
                    <div className="info-parts">
                        <div className={ statusClass }>{ detailsStatus }</div>
                    </div>
                </div>
                <div className="description-wrapper">
                    <div className="label">Description</div>
                    <div className="description info-parts">Ticket description</div>
                </div>
            </div>
        </div>
    )
};

export default Details;