/**
 * Authenticate actions.
 */

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

export function authenticateError(errors) {
    return {
        type: AUTHENTICATE_ERROR,
        errors
    };
}
