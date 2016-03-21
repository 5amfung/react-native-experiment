/**
 * App component.
 */

import React, { Component } from 'react-native';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import * as reducers from './reducers';
import Main from './Main';


let store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(thunk), devTools())  // Comment out devTools() for production.
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}
