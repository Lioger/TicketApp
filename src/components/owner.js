import React from 'react';
import './../styles/owner.css';

const Owner = () => {
    return (
        <div className="owner infoBlock">
            <div className="blockTitle">Owner</div>
            <div className="content">
                <div className="photo">Photo</div>
                <div className="menInfo">
                    <div className="name">Clark Kent</div>
                    <div className="profession">ELECTRICIAN</div>
                </div>
            </div>
        </div>
    )
};

export default Owner;