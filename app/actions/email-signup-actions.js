/**
 * Actions for email sign up.
 */

import Parse from '../utils/parse';

export const EMAIL_SIGN_UP_START = 'EMAIL_SIGN_UP_START';
export const EMAIL_SIGN_UP_COMPLETED = 'EMAIL_SIGN_UP_COMPLETED';
export const EMAIL_SIGN_UP_FAILED = 'EMAIL_SIGN_UP_FAILED';


export function emailSignUpStart() {
    return {
        type: EMAIL_SIGN_UP_START
    };
}

export function emailSignUpCompleted(user) {
    return {
        type: EMAIL_SIGN_UP_COMPLETED,
        user
    };
}

export function emailSignUpFailed(error) {
    return {
        type: EMAIL_SIGN_UP_FAILED,
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
            console.log('Sign up completed:', user);
            dispatch(emailSignUpCompleted(user));
        }, error => {
            console.log('Sign up failed:', error);
            dispatch(emailSignUpFailed(error));
        });
    };
}
