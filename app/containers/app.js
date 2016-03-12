/**
 * App component.
 */

import React, { Component, TabBarIOS } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import TabBar from '../components/tabbar.ios';


let store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TabBar/>
            </Provider>
        );
    }
}
