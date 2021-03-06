/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './components/App';
import {loadUsername, loadRoles} from './actions/userActions';
import './index.css';
import './index.scss';

const store = configureStore();

store.dispatch(loadUsername())
    .then(() => {
      
    });

store.dispatch(loadRoles());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
