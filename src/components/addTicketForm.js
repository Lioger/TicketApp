import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTickets } from './../actions';


const AddTicketForm = () => {
    const ticketsArr = useSelector(state => state.tickets);

    const dispatch = useDispatch();

    const addNewTicket = (e) => {
        e.preventDefault();
        const dateTime = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
        const form = e.target;
        const newTicket = {owner: { name: wayne.name, photo: wayne.photo, profession: wayne.profession },
                            details: { reported: dateTime, status: "ASD", description: form.inputDescription.value },
                            asset: { name: form.assetName.value, geoCode: form.inputGeoCode.value, location: { x: form.inputlocationX, y: form.inputlocationY } },
                            choosen: false, id: Math.random()};
        dispatch(setTickets([...ticketsArr, newTicket]));
    }


    return (
        <div className="add-form-wrapper">
            <div className="title_addTicket title">Add Ticket</div>
            <form className="add-form" onSubmit={ (e) => addNewTicket(e) }>
                <label className="label">Choose a hero</label>
                <select className="input">
                    <option value="wayne">Bruce Wayne</option>
                    <option value="kent">Clark Kent</option>
                    <option value="parker">Peter Parker</option>
                </select>
                <label className="label">Choose status</label>
                <select id="" className="input">
                    <option value="UNA">UNA</option>
                    <option value="ASD">ASD</option>
                    <option value="COM">COM</option>
                </select>
                <label htmlFor="inputDescription" className="label">Description</label>
                <textarea id="inputDescription" className="input textarea" cols="30" rows="10" placeholder="Enter description of ticket"></textarea>
                <label htmlFor="inputAssetName" className="label">Asset name</label>
                <input id="inputAssetName" className="input" type="text" placeholder="Enter asset name" />
                <label htmlFor="inputGeocode" className="label">GeoCode</label>
                <input id="inputGeocode" className="input" type="text" placeholder="Enter GeoCode" />
                <label className="label">Location</label>
                <div className="location-wrapper">
                    <input id="inputLocationX" className="input" type="text" placeholder="X" />
                    <input id="inputLocationY" className="input" type="text" placeholder="Y" />
                </div>
                <button type="submit" className="button_submit button">Submit Ticket</button>
            </form>
        </div>
    )
};

export default AddTicketForm;