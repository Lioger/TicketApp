import React from 'react';

const emptyInfo = () => {
    return (
        <div className="ticket-info ticket-info_empty">
            <div className="cross">x</div>
            <div className="text">No ticket selected</div>
        </div>
    )
};

export default emptyInfo;