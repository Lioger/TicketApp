import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTickets } from './../actions';

import KentPhoto from './../images/kent.jpeg';
import WaynePhoto from './../images/wayne.jpg';
import ParkerPhoto from './../images/parker.jpg';


const AddTicketForm = () => {
    const ticketsArr = useSelector(state => state.tickets);

    const dispatch = useDispatch();

    const [wayne, kent, parker] = [{ name: "Bruce Wayne", photo: WaynePhoto, profession: "Billionaire"},
                                { name: "Clark Kent", photo: KentPhoto, profession: "Electrician"},
                                { name: "Peter Parker", photo: ParkerPhoto, profession: "Student"}];

    const addNewTicket = (e) => {
        e.preventDefault();
        const now = new Date();
        const dateTime = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
        const form = e.target;
        let owner = {};
        let status = '';
        if (form.owner.value === 'wayne') {
            owner = wayne;
        } else if (form.owner.value === 'kent') {
            owner = kent;
        } else {
            owner = parker;
        };
        const newTicket = {owner,
                            details: { reported: dateTime, status: form.status.value, description: form.inputDescription.value },
                            asset: { name: form.inputAssetName.value, geoCode: form.inputGeoCode.value, location: { x: form.inputLocationX.value, y: form.inputLocationY.value } },
                            choosen: false, id: Math.random()};
        dispatch(setTickets([newTicket, ...ticketsArr]));
    }

    const clearForm = (e) => {
        e.preventDefault();
        const form = e.target;
        form.owner.value = 'wayne';
        form.status.value = 'UNA';
        form.inputDescription.value = '';
        form.inputAssetName.value = '';
        form.inputGeoCode.value = '';
        form.inputLocationX.value = '';
        form.inputLocationY.value = '';
    }


    return (
        <div className="add-form-wrapper">
            <div className="title_addTicket title">Add Ticket</div>
            <form className="add-form" onSubmit={ (e) => { addNewTicket(e); clearForm(e) } }>
                <label className="label">Choose a hero</label>
                <select id="owner" className="input">
                    <option value="wayne">Bruce Wayne</option>
                    <option value="kent">Clark Kent</option>
                    <option value="parker">Peter Parker</option>
                </select>
                <label className="label">Choose status</label>
                <select id="status" className="input">
                    <option value="UNA">UNA</option>
                    <option value="ASD">ASD</option>
                    <option value="COM">COM</option>
                </select>
                <label htmlFor="inputDescription" className="label">Description</label>
                <textarea id="inputDescription" className="input textarea" cols="30" rows="10" placeholder="Enter description of ticket"></textarea>
                <label htmlFor="inputAssetName" className="label">Asset name</label>
                <input id="inputAssetName" className="input" type="text" placeholder="Enter asset name" />
                <label htmlFor="inputGeoCode" className="label">GeoCode</label>
                <input id="inputGeoCode" className="input" type="text" placeholder="Enter GeoCode" />
                <label className="label">Location</label>
                <div id="location" className="location-wrapper">
                    <input id="inputLocationX" className="input" type="text" placeholder="X" />
                    <input id="inputLocationY" className="input" type="text" placeholder="Y" />
                </div>
                <button type="submit" className="button_submit button">Submit Ticket</button>
            </form>
        </div>
    )
};

export default AddTicketForm;