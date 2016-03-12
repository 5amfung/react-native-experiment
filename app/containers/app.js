/**
 * App component.
 */

import React, { Component } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

import Login from './login';
import SignUp from './signup';


let store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Login/>
            </Provider>
        );
    }
}
