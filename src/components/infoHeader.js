import React from 'react';

const InfoHeader = () => {
    const now = new Date();
    const dateTime = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}` 
    return (
        <div className="infoHeader">
            <div className="ticketNo">
                <span className="label">TICKET NO. </span>
                <span>PU-OV-5</span>
            </div>
            <div className="lastUpd label">
                LAST UPDATED { dateTime }
            </div>
        </div>    
    )
};

export default InfoHeader;