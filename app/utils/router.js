/**
 * Navigation router.
 */

import Capture from '../components/Capture';
import Login from '../containers/LogIn';
import Notifications from '../components/Notifications';
import Profile from '../containers/Profile';
import Search from '../components/Search';
import SignUp from '../containers/SignUp';
import Stores from '../components/Stores';
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
