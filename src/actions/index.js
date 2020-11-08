export const setChoosenTicket = (id) => {
    return {
        type: 'SETCHOOSENTICKET',
        payload: id,
    };
}