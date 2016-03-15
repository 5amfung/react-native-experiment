/**
 * Email log in actions.
 */

import Parse from '../utils/parse';

export const EMAIL_LOGIN_START = 'EMAIL_LOGIN_START';
export const EMAIL_LOGIN_SUCCESS = 'EMAIL_LOGIN_SUCCESS';
export const EMAIL_LOGIN_ERROR = 'EMAIL_LOGIN_ERROR';


export function emailLoginStart() {
    return {
        type: EMAIL_LOGIN_START
    };
}

export function emailLoginSuccess(user) {
    return {
        type: EMAIL_LOGIN_SUCCESS,
        user
    };
}

export function emailLoginError(error) {
    return {
        type: EMAIL_LOGIN_ERROR,
        error
    };
}

export function emailLogin({ email, password }) {
    return dispatch => {
        dispatch(emailLoginStart());
        return Parse.User.logIn(email, password).then(user => {
            dispatch(emailLoginSuccess(user));
        }, error => {
            dispatch(emailLoginError(error));
        });
    };
}
