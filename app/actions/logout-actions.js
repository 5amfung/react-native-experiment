/**
 * Log out actions.
 */

import Parse from '../utils/parse';

export const LOG_OUT_START = 'LOG_OUT_START';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_ERROR = 'LOG_OUT_ERROR';


export function logOutStart() {
    return {
        type: LOG_OUT_START
    };
}

export function logOutSuccess() {
    return {
        type: LOG_OUT_SUCCESS
    };
}

export function logOutError(error) {
    return {
        type: LOG_OUT_ERROR,
        error
    };
}

export function logOut() {
    return dispatch => {
        dispatch(logOutStart());

        return Parse.User.logOut().then(() => {
            dispatch(logOutSuccess());
        }, error => {
            dispatch(logOutError(error));
        });
    };
}
