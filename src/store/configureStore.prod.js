/**
 * Created by Dan Stevenson on 7/30/2017.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
