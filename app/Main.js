/**
 * Main.
 */

import React, { Component, NavigationExperimental } from 'react-native';
const { Reducer } = NavigationExperimental;

import { connect } from 'react-redux';
import { authenticate } from './actions/authenticate';
import TabBar from './components/TabBar.ios';


class Main extends Component {

    componentDidMount() {
        // Check if user is authenticated.
        this.props.authenticate();
    }

    render() {
        return (
            <TabBar navigationState={this.props.navigationState}
                    selectTabIndex={this.props.selectTabIndex}/>
        );
    }
}
Main.propTypes = {
    authenticate: React.PropTypes.func,
    navigationState: React.PropTypes.object,
    selectTabIndex: React.PropTypes.func
};

let mapStateToProps = state => {
    return {
        navigationState: state.navigation
    };
};

let mapDispatchToProps = dispatch => {
    return {
        authenticate: () => {
            dispatch(authenticate());
        },
        selectTabIndex: (index) => {
            dispatch(Reducer.TabsReducer.JumpToAction(index));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
