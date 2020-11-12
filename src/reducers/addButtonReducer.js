const addButtonReducer = (state = false, action) => {

    switch (action.type) {
        case 'ADDBUTTONCLICK':
            return state = action.payload;
        default:
            return state;
    }
}

export default addButtonReducer;