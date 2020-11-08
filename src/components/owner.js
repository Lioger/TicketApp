import React from 'react';

const Owner = ({ ownerName, ownerPhoto }) => {
    const ownerStyle = `url(${ownerPhoto})`;

    return (
        <div className="owner info-block">
            <div className="info-block__title">Owner</div>
            <div className="info-block__content">
                <div className="owner-photo" style={{backgroundImage: ownerStyle, backgroundSize: 'contain'}}></div>
                <div className="owner-info">
                    <div className="owner-name">{ ownerName }</div>
                    <div className="owner-profession">ELECTRICIAN</div>
                </div>
            </div>
        </div>
    )
};

export default Owner;