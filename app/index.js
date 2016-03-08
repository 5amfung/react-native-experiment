/**
 * App component.
 */

import React, { Component } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { reducer } from './reducer';

import { Login } from './component/login';

// let store = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Login/>
        );
    }
}
