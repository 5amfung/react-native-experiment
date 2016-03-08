/**
 * Exports all reducers.
 */

import { combinReducers } from 'redux';
import { emailLogin } from './email-login';
// TODO: Import other reducers here.  For example,
//   import { emailSignUp } from './email-sign-up';
//   import { passwordReset } from './psasword-reset';

export default combinReducers({
    emailLogin
});
