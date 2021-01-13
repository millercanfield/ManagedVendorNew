/**
 * Created by Dan Stevenson on 7/30/2017.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function userReducer(state = initialState.username, action){
    switch(action.type){
        case types.LOAD_USERNAME_SUCCESS:
            return action.username;
        default:
            return state;
    }
}
