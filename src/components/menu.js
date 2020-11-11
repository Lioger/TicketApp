import React from 'react';
import Search from './search';
import TicketList from './ticketList';
import AddTicket from './addTicketButton';

const Menu = () => {
    return(
        <div className="menu">
            <Search />
            <AddTicket />
            <TicketList />
        </div>
    )
};

export default Menu;