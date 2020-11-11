import React from 'react';

const AddTicketForm = () => {
    return (
        <div className="add-form-wrapper">
            <div className="title_addTicket title">Add Ticket</div>
            <form className="add-form" onSubmit={ (e) => e.preventDefault() }>
                <label className="label">Choose a hero</label>
                <select className="input">
                    <option value="wayne">Bruce Wayne</option>
                    <option value="kent">Clark Kent</option>
                    <option value="parker">Peter Parker</option>
                </select>
                <label className="label">Reported Date</label>
                <input type="date" className="input" placeholder="Choose reported date" />
                <label className="label">Choose status</label>
                <select id="" className="input">
                    <option value="UNA">UNA</option>
                    <option value="ASD">ASD</option>
                    <option value="COM">COM</option>
                </select>
                <label htmlFor="input-description" className="label">Description</label>
                <textarea id="input-description" className="input textarea" cols="30" rows="10" placeholder="Enter description of ticket"></textarea>
                <label htmlFor="input-assetName" className="label">Asset name</label>
                <input id="input-assetName" className="input" type="text" placeholder="Enter asset name" />
                <label htmlFor="input-geocode" className="label">GeoCode</label>
                <input id="input-geocode" className="input" type="text" placeholder="Enter GeoCode" />
                <label className="label">Location</label>
                <div className="location-wrapper">
                    <input className="input" type="text" placeholder="X" />
                    <input className="input" type="text" placeholder="Y" />
                </div>
                <button type="submit" className="button_submit button">Submit Ticket</button>
            </form>
        </div>
    )
};

export default AddTicketForm;