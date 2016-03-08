/**
 * Reducer for email login.
 */

import {
    EMAIL_LOGIN_START,
    EMAIL_LOGIN_COMPLETED,
    EMAIL_LOGIN_FAILED
} from '../action/email-login';

const initialState = {
    inProgress: false,
    error: null
};

export default function emailLogin(state = initialState, action) {
    switch (action.type) {
        case EMAIL_LOGIN_START:
            return {
                ...state,
                inProgress: true
            };
        case EMAIL_LOGIN_COMPLETED:
            return {...initialState};
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
