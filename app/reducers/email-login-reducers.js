/**
 * Reducer for email login.
 */

import {
    EMAIL_LOGIN_START,
    EMAIL_LOGIN_COMPLETED,
    EMAIL_LOGIN_FAILED
} from '../actions/email-login-actions';


const initialState = {
    inProgress: false,
    user: null,
    error: null
};

export default function emailLogin(state = initialState, action) {
    switch (action.type) {
        case EMAIL_LOGIN_START:
            return {
                ...state,
                inProgress: true,
                user: null
            };
        case EMAIL_LOGIN_COMPLETED:
            return {
                ...state,
                inProgress: false,
                user: action.user
            };
        case EMAIL_LOGIN_FAILED:
            return {
                ...state,
                inProgress: false,
                error: action.error
            };
        default:
            return state;
    }
}
