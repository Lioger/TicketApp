import React from 'react';
import { useDispatch } from 'react-redux';
import { setChoosenTicket } from './../actions';

const ticketItem = ( {status, asset, reported, ownerPhoto, choosen, id, hidden} ) => {

    const dispatch = useDispatch();

    const ticketWrapClassName = `row-wrap ${ (choosen) ? 'choosen' : '' } ${ (hidden) ? 'hidden' : '' }`;
    const ownerStyle = `url(${ownerPhoto})`;
    const statusClass = `status ${ status }`;

    return(
        <div className={ticketWrapClassName} onClick={ () => dispatch(setChoosenTicket(id)) }>
            <div className="list__item">
                <div className="owner" style={{backgroundImage: ownerStyle, backgroundSize: 'contain'}}></div>
                <div className="reported">{ reported }</div>
                <div className="asset">{ asset }</div>
                <div className={ statusClass }>{ status }</div>
            </div>
        </div>
    )
};

export default ticketItem;