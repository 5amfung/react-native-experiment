/**
 * Logout action.
 */

import Parse from '../utils/parse';

export const LOG_OUT_START = 'LOG_OUT_START';
export const LOG_OUT_COMPLETED = 'LOG_OUT_COMPLETED';
export const LOG_OUT_FAILED = 'LOG_OUT_FAILED';


export function logOutStart() {
    return {
        type: LOG_OUT_START
    };
}

export function logOutCompleted() {
    return {
        type: LOG_OUT_COMPLETED
    };
}

export function logOutFailed(error) {
    return {
        type: LOG_OUT_FAILED,
        error
    };
}

export function logOut() {
    return dispatch => {
        dispatch(logOutStart());

        return Parse.User.logOut().then(() => {
            dispatch(logOutCompleted());
        }, error => {
            dispatch(logOutFailed(error));
        });
    };
}
