import React from 'react';

const Asset = ({ assetName }) => {
    return (
        <div className="asset info-block">
            <div className="info-block__title">Asset</div>
            <div className="info-block__content">
                <div className="name-wrapper">
                    <div className="label">Name</div>
                    <div className="name info">{ assetName }</div>
                </div>
                <div className="geoCode-wrapper">
                    <div className="label">GeoCode</div>
                    <div className="geoCode info">137</div>
                </div>
                <div className="location-wrapper">
                    <div className="label">Location</div>
                    <div className="location info">
                        <div className="status">2.900</div>
                        <div className="status">19.100</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Asset;