/**
 * App component.
 */

import React, { Component } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducer';
import thunk from 'redux-thunk';

import Login from './component/login';


let store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Login/>
            </Provider>
        );
    }
}
