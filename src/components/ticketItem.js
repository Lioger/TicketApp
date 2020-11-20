import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { setChoosenTicket, addButtonClick } from './../actions';
import Status from './status';

const ticketItem = ( {status, asset, reported, ownerPhoto, choosen, id, hidden} ) => {
    
    const dispatch = useDispatch();

    const ticketWrapClasses = classNames("row-wrap", { choosen, hidden});
    const ownerStyle = `url(${ownerPhoto})`;

    return(
        <Link to={`/${id}`} className="link">
            <div className={ticketWrapClasses} onClick={ () => { dispatch(addButtonClick(false)); dispatch(setChoosenTicket(id)) } }>
                <div className="list__item">
                    <div className="owner" style={{backgroundImage: ownerStyle, backgroundSize: 'contain'}}></div>
                    <div className="reported">{ reported }</div>
                    <div className="asset">{ asset }</div>
                    <Status status={status} />
                </div>
            </div>
        </Link> 
    )
};

export default ticketItem;