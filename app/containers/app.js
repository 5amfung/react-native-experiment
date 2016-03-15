/**
 * App component.
 */

import React, { Component } from 'react-native';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import devTools from 'remote-redux-devtools';

import Main from '../containers/main';


// Uncomment devTools() to debug redux states.  Not advised for production.
let store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(thunk), devTools())
);

export default class App extends Component {
    render() {
        // Provide redux store to app.
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}
