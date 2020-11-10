import React from 'react';

const Asset = ({ asset }) => {
    return (
        <div className="asset info-block">
            <div className="info-block__title">Asset</div>
            <div className="info-block__content">
                <div className="name-wrapper">
                    <div className="label">Name</div>
                    <div className="name info-parts">{ asset.name }</div>
                </div>
                <div className="geoCode-wrapper">
                    <div className="label">GeoCode</div>
                    <div className="geoCode info-parts">{ asset.geoCode }</div>
                </div>
                <div className="location-wrapper">
                    <div className="label">Location</div>
                    <div className="location info-parts">
                        <div className="status">{ asset.location.x }</div>
                        <div className="status">{ asset.location.y }</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Asset;