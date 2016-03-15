/**
 * App component.
 */

import React, { Component } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import Router from '../utils/router';

// Uncomment devTools() to debug redux states locally.  Not advised for production.
// import devTools from 'remote-redux-devtools';

let store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(thunk) /*, devTools() */)
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ExNavigator showNavigationBar={false} initialRoute={Router.MainRoute()} />
            </Provider>
        );
    }
}
