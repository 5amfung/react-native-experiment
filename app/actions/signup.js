/**
 * Email sign up actions.
 */

import Parse from '../utils/parse';

export const EMAIL_SIGN_UP_START = 'EMAIL_SIGN_UP_START';
export const EMAIL_SIGN_UP_SUCCESS = 'EMAIL_SIGN_UP_SUCCESS';
export const EMAIL_SIGN_UP_ERROR = 'EMAIL_SIGN_UP_ERROR';


export function emailSignUpStart() {
    return {
        type: EMAIL_SIGN_UP_START
    };
}

export function emailSignUpSuccess(user) {
    return {
        type: EMAIL_SIGN_UP_SUCCESS,
        user
    };
}

export function emailSignUpError(error) {
    return {
        type: EMAIL_SIGN_UP_ERROR,
        error
    };
}

export function emailSignUp({ email, password, firstName, lastName }) {
    return dispatch => {
        dispatch(emailSignUpStart());

        let user = new Parse.User({
            username: email,
            password,
            email,
            firstName,
            lastName,
            active: true
        });
        user.signUp().then(user => {
            dispatch(emailSignUpSuccess(user));
        }, error => {
            dispatch(emailSignUpError(error));
        });
    };
}
