import React from 'react';
import { useDispatch } from 'react-redux';
import { setChoosenTicket, addButtonClick } from './../actions';
import { Link } from 'react-router-dom';

const ticketItem = ( {status, asset, reported, ownerPhoto, choosen, id, hidden} ) => {
    
    const dispatch = useDispatch();

    const ticketWrapClassName = `row-wrap ${ (choosen) ? 'choosen' : '' } ${ (hidden) ? 'hidden' : '' }`;
    const ownerStyle = `url(${ownerPhoto})`;
    const statusClass = `status ${ status }`;

    return(
        <Link to={`/${id}`} className="link">
            <div className={ticketWrapClassName} onClick={ () => { dispatch(addButtonClick(false)); dispatch(setChoosenTicket(id)) } }>
                <div className="list__item">
                    <div className="owner" style={{backgroundImage: ownerStyle, backgroundSize: 'contain'}}></div>
                    <div className="reported">{ reported }</div>
                    <div className="asset">{ asset }</div>
                    <div className={ statusClass }>{ status }</div>
                </div>
            </div>
        </Link> 
    )
};

export default ticketItem;