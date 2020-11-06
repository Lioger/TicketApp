import React from 'react';
import './../styles/asset.css';

const Asset = () => {
    return (
        <div className="asset infoBlock">
            <div className="blockTitle">Asset</div>
            <div className="content">
                <div className="nameWrapper">
                    <div className="label">Name</div>
                    <div className="name info">25/07/2019 23:55</div>
                </div>
                <div className="geoCodeWrapper">
                    <div className="label">GeoCode</div>
                    <div className="geoCode info">137</div>
                </div>
                <div className="locationWrapper">
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