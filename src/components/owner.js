import React from 'react';

const Owner = ({ owner }) => {
    const ownerStyle = `url(${owner.photo})`;
    const ownerProfession = (owner.profession).toUpperCase();

    return (
        <div className="owner info-block">
            <div className="info-block__title">Owner</div>
            <div className="info-block__content">
                <div className="owner-photo" style={{backgroundImage: ownerStyle, backgroundSize: 'contain'}}></div>
                <div className="owner-info">
                    <div className="owner-name">{ owner.name }</div>
                    <div className="owner-profession">{ ownerProfession }</div>
                </div>
            </div>
        </div>
    )
};

export default Owner;