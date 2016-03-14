/**
 * App component.
 */

import React, { Component } from 'react-native';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import TabBar from '../components/tabbar.ios';

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
                <TabBar/>
            </Provider>
        );
    }
}
