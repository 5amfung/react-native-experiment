/**
 * App component.
 */

import React, { Component } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducer';

import Login from './login';


let store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class App extends Component {

    constructor(props) {
        super(props);

        // TODO: Configure stuff here.
    }

    render() {
        return (
            <Provider store={store}>
                <Login/>
            </Provider>
        );
    }
}
