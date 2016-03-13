/**
 * Actions for email login.
 */

import Parse from '../utils/parse';

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
        return Parse.User.logIn(email, password).then(user => {
            dispatch(emailLoginCompleted(user));
        }, error => {
            dispatch(emailLoginFailed(error));
        });
    };
}
