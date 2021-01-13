import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function vendorsReducer(state = initialState.vendors, action){
    switch(action.type){
        case types.LOAD_VENDORS_SUCCESS:
            return action.vendors;
        default:
            return state;
    }
}
