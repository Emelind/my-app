import { createAction } from "@reduxjs/toolkit";

const setColor = createAction('set color');
const initialState = 'white';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'set color':
            return action.payload;
        default:
            return state;
    }
};

export {reducer, setColor};