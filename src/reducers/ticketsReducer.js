import KentPhoto from './../images/kent.jpeg';
import WaynePhoto from './../images/wayne.jpg';
import ParkerPhoto from './../images/parker.jpg';

const [wayne, kent, parker] = [{ name: "Bruce Wayne", photo: WaynePhoto, profession: "Billionaire"},
                                { name: "Clark Kent", photo: KentPhoto, profession: "Electrician"},
                                { name: "Peter Parker", photo: ParkerPhoto, profession: "Student"}];

const ticketsReducer = (state = [
    {owner: { name: wayne.name, photo: wayne.photo, profession: wayne.profession },
        details: { reported: "29/07/19 12:41", status: "ASD", description: "Ticket description" },
        asset: { name: "Sign", geoCode: "137", location: { x: "2.900", y: "19.100" } },
        choosen: false, id: Math.random()},
    {owner: { name: kent.name, photo: kent.photo, profession: kent.profession },
        details: { reported: "26/07/19 14:23", status: "COM", description: "Ticket description" },
        asset: { name: "Switch", geoCode: "137", location: { x: "2.900", y: "19.100" } },
        choosen: false, id: Math.random()},
    {owner: { name: parker.name, photo: parker.photo, profession: parker.profession },
        details: { reported: "30/07/19 19:52", status: "UNA", description: "Ticket description" },
        asset: { name: "Switch coding", geoCode: "137", location: { x: "2.900", y: "19.100" } },
        choosen: false, id: Math.random()},
], action) => {
    switch (action.type) {
        case 'REMOVETICKET':
            return state = state.filter((ticket) => ticket.id !== action.payload);

        case 'SETCHOOSENTICKET':
            return state = state.map((ticket) => {
                ticket = {...ticket, choosen: false};
                if (ticket.id === action.payload) {
                    return {...ticket, choosen: true};
                };
            return ticket});

        case 'FINDTICKETS':
            return state = state.map((ticket) => {
                if (!ticket.asset.name.toLowerCase().includes(action.payload.toLowerCase())) {
                    return {...ticket, hidden: true};
                } else {
                    return {...ticket, hidden: false};
                };
            });    

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