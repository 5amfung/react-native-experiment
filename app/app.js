/**
 * App component.
 */

import React, { Component } from 'react-native';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import ExNavigator from '@exponent/react-native-navigator';

import { authenticate } from './actions/authenticate';
import Router from './utils/router';
import * as reducers from './reducers';


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

class _Main extends Component {

    componentDidMount() {
        // Check if user is authenticated.
        this.props.authenticate();
    }

    render() {
        return (
            <ExNavigator showNavigationBar={false}
                         initialRoute={Router.TabBarRoute()} />
        );
    }
}
_Main.propTypes = {
    authenticate: React.PropTypes.func
};

let mapDispatchToStates = dispatch => {
    return {
        authenticate: () => {
            dispatch(authenticate());
        }
    };
};
let Main = connect(undefined, mapDispatchToStates)(_Main);
