import React from 'react';
import Search from './search';
import TicketList from './ticketList';

const Menu = () => {
    return(
        <div className="menu">
            <Search />
            <TicketList />
        </div>
    )
};

export default Menu;