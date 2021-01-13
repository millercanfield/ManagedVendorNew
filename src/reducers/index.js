/**
 * Created by Dan Stevenson on 7/30/2017.
 */
/*eslint-disable import/default */
import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import username from './userReducer';
import vendors from './vendorsReducer';
import roles from './rolesReducer';

const rootReducer = combineReducers({
    username,
    vendors,
    roles,
    ajaxCallsInProgress
});

export default rootReducer;
