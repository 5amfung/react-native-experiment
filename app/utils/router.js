/**
 * Navigation router.
 */

import React from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';

import Capture from '../components/capture';
import Login from '../containers/login';
import Notifications from '../components/notifications';
import Profile from '../containers/profile';
import Search from '../components/search';
import SignUp from '../containers/signup';
import Stores from '../components/stores';
import TabBar from '../containers/tabbar.ios.js';


let Router = {
    TabBarRoute() {
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

    ProfileRoute() {
        return {
            getSceneClass() {
                return Profile;
            },
            getTitle() {
                return 'Profile';
            }
        };
    },

    LogInRoute() {
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
