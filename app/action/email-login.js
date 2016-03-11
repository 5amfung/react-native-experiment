/**
 * Actions for email login.
 */

import Parse from '../util/parse';

export const EMAIL_LOGIN_START = 'EMAIL_LOGIN_START';
export const EMAIL_LOGIN_COMPLETED = 'EMAIL_LOGIN_COMPLETED';
export const EMAIL_LOGIN_FAILED = 'EMAIL_LOGIN_FAILED';


export function emailLoginStart() {
    return {
        type: EMAIL_LOGIN_START
    };
}

export function emailLoginCompleted(user) {
    return {
        type: EMAIL_LOGIN_COMPLETED,
        user
    };
}

export function emailLoginFailed(error) {
    return {
        type: EMAIL_LOGIN_FAILED,
        error
    };
}

export function emailLogin({ email, password }) {
    return (dispatch) => {
        dispatch(emailLoginStart());
        Parse.User.logIn(email, password).then(user => {
            console.log('Login completed:', user);
            dispatch(emailLoginCompleted(user));
        }, error => {
            console.log('Login failed:', error);
            dispatch(emailLoginFailed(error));
        });
    };
}
