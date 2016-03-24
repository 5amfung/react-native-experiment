/**
 * Email log in actions.
 */

import Parse from '../utils/parse';
import { Actions } from 'react-native-router-flux';


export const EMAIL_LOGIN_START = 'EMAIL_LOGIN_START';
export const EMAIL_LOGIN_SUCCESS = 'EMAIL_LOGIN_SUCCESS';
export const EMAIL_LOGIN_ERROR = 'EMAIL_LOGIN_ERROR';

export function emailLogInStart() {
    return {
        type: EMAIL_LOGIN_START
    };
}

export function emailLogInSuccess(user) {
    return {
        type: EMAIL_LOGIN_SUCCESS,
        user
    };
}

export function emailLogInError(error) {
    return {
        type: EMAIL_LOGIN_ERROR,
        error
    };
}

export function emailLogIn(username, password) {
    return (dispatch) => {
        dispatch(emailLogInStart());
        return Parse.User.logIn(username, password).then(user => {
            dispatch(emailLogInSuccess(user));

            // Hacky.  Assuming log in is always done in a modal.
            Actions.pop();
        }, error => {
            dispatch(emailLogInError(error));
        });
    };
}
