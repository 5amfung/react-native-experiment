/**
 * Exports all reducers.
 */

import authentication from './authentication-reducer';
import emailLogIn from './email-login-reducers';
import emailSignUp from './email-signup-reducers';
import logOut from './logout-reducers';
import ui from './ui-reducer';


export {
    authentication,
    emailLogIn,
    emailSignUp,
    logOut,
    ui
};
