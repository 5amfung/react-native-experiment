/**
 * Exports all reducers.
 */

import authentication from './authentication-reducer';
import emailLogin from './email-login-reducers';
import emailSignUp from './email-signup-reducers';
import logout from './logout-reducers';

export {
    authentication,
    emailLogin,
    emailSignUp,
    logout
};
