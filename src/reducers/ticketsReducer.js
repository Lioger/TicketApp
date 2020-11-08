import KentPhoto from './../images/kent.jpeg';
import WaynePhoto from './../images/wayne.jpg';
import ParkerPhoto from './../images/parker.jpg';

const [wayne, kent, parker] = ["Bruce Wayne", "Clark Kent", "Peter Parker"];

const ticketsReducer = (state = [
    {status: "ASD", asset: "Sign", reported:"29/07/19 17:30", ownerName: wayne, ownerPhoto: WaynePhoto, choosen: false, id: Math.random()},
    {status: "COM", asset: "Switch", reported:"26/07/19 17:30", ownerName: kent, ownerPhoto: KentPhoto, choosen: false, id: Math.random()},
    {status: "UNA", asset: "Switch", reported:"24/07/19 17:30", ownerName: kent, ownerPhoto: KentPhoto, choosen: false, id: Math.random()}, 
    {status: "COM", asset: "Switch reporting", reported:"28/07/19 15:31", ownerName: parker, ownerPhoto: ParkerPhoto, choosen: false, id: Math.random()}, 
], action) => {
    switch (action.type) {
        case 'SETCHOOSENTICKET':
            return state = state.map((ticket) => {
                ticket = {...ticket, choosen: false};
                if (ticket.id === action.payload) {
                    return {...ticket, choosen: true};
                };
            return ticket});

        // case 'FINDTODOS':
        //     return state = state.map((todo) => {
        //         if (!todo.content.toLowerCase().includes(action.payload.toLowerCase())) {
        //             return {...todo, hidden: true};
        //         } else {
        //             return {...todo, hidden: false};
        //         };
        //     });    

        // case 'ALLFILTER':
        //     return state = state.map((todo) => ({...todo, hidden: false}));
        
        // case 'ACTIVEFILTER':
        //     return state = state.map((todo) => {
        //         todo.completed ? todo.hidden = true : todo.hidden = false;
        //         return todo;
        //     });

        // case 'COMPLETEDFILTER':
        //     return state = state.map((todo) => {
        //         if (todo.completed) {
        //             return {...todo, hidden: false};
        //         } else {
        //             return {...todo, hidden: true};
        //          };
        //     });

        default:
            return state;
    }
}

export default ticketsReducer;