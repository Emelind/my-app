import { combineReducers } from "redux";
import {reducer as colorReducer} from './color';

const rootReducer = combineReducers({
    color: colorReducer
})

export {rootReducer};