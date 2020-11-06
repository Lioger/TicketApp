import React from 'react';

const ticketItem = ( {status, asset} ) => {
    const now = new Date();
    const dateFormatted = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}` 
    const statusClass = `status ${ status }`;
    return(
        <div className="cellWrap">
            <div className="listItem">
                <div className="owner">OWNER</div>
                <div className="reported">{ dateFormatted }</div>
                <div className="asset">{ asset }</div>
                <div className={ statusClass }>{ status }</div>
            </div>
        </div>
    )
};

export default ticketItem;