/**
 * Navigation router.
 */

import Capture from '../components/capture';
import Notifications from '../components/notifications';
import Profile from '../components/profile';
import Search from '../components/search';
import Stores from '../components/stores';


let Router = {
    Stores() {
        return {
            getSceneClass() {
                return Stores;
            },
            getTitle() {
                return 'Stores';
            }
        };
    },

    Notifications() {
        return {
            getSceneClass() {
                return Notifications;
            },
            getTitle() {
                return 'Notifications';
            }
        };
    },

    Search() {
        return {
            getSceneClass() {
                return Search;
            },
            getTitle() {
                return 'Search';
            }
        };
    },

    Capture() {
        return {
            getSceneClass() {
                return Capture;
            },
            getTitle() {
                return 'Capture';
            }
        };
    },

    Profile() {
        return {
            getSceneClass() {
                return Profile;
            },
            getTitle() {
                return 'Profile';
            }
        };
    }
};
export default Router;
