/**
 * Main component.
 */

import React, { Component } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import { connect } from 'react-redux';
import Router from '../utils/router';
import { authenticate } from '../actions/authenticate-actions';

export default class Main extends Component {
    componentWillMount() {
        // Check if user is authenticated.
        this.props.dispatch(authenticate());
    }

    render() {
        return (
            <ExNavigator showNavigationBar={false} initialRoute={Router.MainRoute()} />
        );
    }
}
Main.propTypes = { dispatch: React.PropTypes.func };
export default connect()(Main);

