/**
 * Exports all reducers.
 */

import authentication from './authentication-reducer';
import emailLogin from './email-login-reducers';
import emailSignUp from './email-signup-reducers';
import logout from './logout-reducers';
import ui from './ui-reducer';


export {
    authentication,
    emailLogin,
    emailSignUp,
    logout,
    ui
};
