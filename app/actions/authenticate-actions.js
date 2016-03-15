/**
 * Authenticate actions.
 */

import Parse from '../utils/parse';


export const AUTHENTICATE_START = 'AUTHENTICATE_START';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_ERROR = 'AUTHENTICATE_ERROR';

export function authenticateStart() {
    return {
        type: AUTHENTICATE_START
    };
}

export function authenticateSuccess(user) {
    return {
        type: AUTHENTICATE_SUCCESS,
        user
    };
}

export function authenticateError() {
    // AUTHENTICATE_ERROR means user is not logged in.
    return {
        type: AUTHENTICATE_ERROR
    };
}

export function authenticate() {
    return dispatch => {
        dispatch(authenticateStart());
        return Parse.User.currentAsync().then(user => {
            if (user) {
                dispatch(authenticateSuccess(user));
            } else {
                dispatch(authenticateError());
            }
        });
    };
}
