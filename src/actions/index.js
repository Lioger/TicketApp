export const removeTicket = (id) => {
    return {
        type: 'REMOVETICKET',
        payload: id,
    };
}

export const setChoosenTicket = (id) => {
    return {
        type: 'SETCHOOSENTICKET',
        payload: id,
    };
}

export const findTickets = (searchRequest) => {
    return {
        type: 'FINDTICKETS',
        payload: searchRequest,
    };
}

export const setSearch = (content) => {
    return {
        type: 'SEARCH',
        payload: content,
    };
}