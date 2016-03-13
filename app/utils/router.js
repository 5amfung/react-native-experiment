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
            },
            onDidFocus() {
                console.log('Stores view: focus');
            },
            onDidBlur() {
                console.log('Stores view: blur');
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
            },
            onDidFocus() {
                console.log('Notifications view: focus');
            },
            onDidBlur() {
                console.log('Notifications view: blur');
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
            },
            onDidFocus() {
                console.log('Search view: focus');
            },
            onDidBlur() {
                console.log('Search view: blur');
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
            },
            onDidFocus() {
                console.log('Capture view: focus');
            },
            onDidBlur() {
                console.log('Capture view: blur');
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
            },
            onDidFocus() {
                console.log('Profile view: focus');
            },
            onDidBlur() {
                console.log('Profile view: blur');
            }
        };
    }
};
export default Router;
