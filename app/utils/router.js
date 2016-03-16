/**
 * Navigation router.
 */

import React from 'react-native';
import Capture from '../components/capture';
import Notifications from '../components/notifications';
import Profile from '../components/profile';
import Search from '../components/search';
import Stores from '../components/stores';
import TabBar from '../containers/tabbar.ios.js';
import Login from '../containers/login';
import SignUp from '../containers/signup';


let Router = {
    MainRoute() {
        return {
            getSceneClass() {
                return TabBar;
            }
        };
    },

    StoresRoute() {
        return {
            getSceneClass() {
                return Stores;
            },
            getTitle() {
                return 'Stores';
            }
        };
    },

    NotificationsRoute() {
        return {
            getSceneClass() {
                return Notifications;
            },
            getTitle() {
                return 'Notifications';
            }
        };
    },

    SearchRoute() {
        return {
            getSceneClass() {
                return Search;
            },
            getTitle() {
                return 'Search';
            }
        };
    },

    CaptureRoute() {
        return {
            getSceneClass() {
                return Capture;
            },
            getTitle() {
                return 'Capture';
            }
        };
    },

    ProfileRoute(authenticated) {
        return {
            renderScene(navigator) {
                return (
                    <Profile navigator={navigator} authenticated={authenticated}/>
                );
            },
            getTitle() {
                return 'Profile';
            }
        };
    },

    LoginRoute() {
        return {
            getSceneClass() {
                return Login;
            },
            getTitle() {
                return 'Log In';
            }
        };
    },

    SignUpRoute() {
        return {
            getSceneClass() {
                return SignUp;
            },
            getTitle() {
                return 'Sign Up';
            }
        };
    }
};
export default Router;
