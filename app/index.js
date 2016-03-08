/**
 * App component.
 */

import React, { Component } from 'react-native';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducer';
import Login from './component/login';


let store = createStore(combineReducers(reducers));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Login/>
            </Provider>
        );
    }
}
