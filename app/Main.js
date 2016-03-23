/**
 * Main.
 */

import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import { authenticate } from './actions/authenticate';

import { Actions, Scene, Reducer, Router, TabBar, Modal } from 'react-native-router-flux';

import Capture from './components/Capture';
import Notifications from './components/Notifications';
import Profile from './containers/Profile';
import Search from './components/Search';
import Stores from './components/Stores';
import { StoreTabIcon, NotificationTabIcon, SearchTabIcon, CameraTabIcon, ProfileTabIcon } from './components/TabIcon';

import LogIn from './containers/LogIn';
import SignUp from './containers/SignUp';


const createNavigationReducer = (params) => {
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

class Main extends Component {

    componentDidMount() {
        // Check if user is authenticated.
        this.props.authenticate();
    }

    render() {
        return (
            <Router createReducer={createNavigationReducer}>
                <Scene key='root' hideNavBar={true}>
                    <Scene key='tabbar' tabs={true} default='storesTab'>
                        <Scene key='storesTab'
                               title='Stores'
                               icon={StoreTabIcon}
                               initial={true}
                               component={Stores}/>
                        <Scene key='notificationsTab'
                               title='Notifications'
                               icon={NotificationTabIcon}
                               component={Notifications}/>
                        <Scene key='searchTab'
                               title='Search'
                               icon={SearchTabIcon}
                               component={Search}/>
                        <Scene key='captureTab'
                               title='Capture'
                               icon={CameraTabIcon}
                               component={Capture}/>
                        <Scene key='profileTab'
                               title='Profile'
                               icon={ProfileTabIcon}
                               component={Profile}/>
                    </Scene>
                    <Scene key='login' direction='vertical'>
                        <Scene key="loginModal"
                               title="Log In"
                               component={LogIn}
                               schema='modal'
                               leftTitle='Cancel'
                               onLeft={() => {
                                   Actions.pop();
                               }}/>
                    </Scene>
                    <Scene key='signUp' direction='vertical'>
                        <Scene key="signUpModal"
                               title="Sign Up"
                               component={SignUp}
                               schema='modal'
                               leftTitle='Cancel'
                               onLeft={() => {
                                   Actions.pop();
                               }}/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
Main.propTypes = {
    authenticate: React.PropTypes.func
};

let mapDispatchToProps = dispatch => {
    return {
        authenticate: () => {
            dispatch(authenticate());
        }
    };
};
export default connect(undefined, mapDispatchToProps)(Main);
