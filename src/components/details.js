import React from 'react';

const Details = ({ details }) => {
    const status = details.status.toUpperCase();
    const statusClass = `status ${ status }`;

    return (
        <div className="details info-block">
            <div className="info-block__title">Details</div>
            <div className="info-block__content">
                <div className="reported-wrapper">
                    <div className="label">Reported</div>
                    <div className="reportedDate info-parts">{ details.reported }</div>
                </div>
                <div className="status-wrapper">
                    <div className="label">Status</div>
                    <div className="info-parts">
                        <div className={ statusClass }>{ status }</div>
                    </div>
                </div>
                <div className="description-wrapper">
                    <div className="label">Description</div>
                    <div className="description info-parts">{ details.description }</div>
                </div>
            </div>
        </div>
    )
};

export default Details;