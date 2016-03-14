/**
 * Authentication reducer.
 */

import { EMAIL_LOGIN_COMPLETED } from '../actions/email-login-actions';
import { EMAIL_SIGN_UP_COMPLETED } from '../actions/email-signup-actions';
import { LOG_OUT_COMPLETED } from '../actions/logout-actions';

const initialState = {
    authenticated: false,
    user: null
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case EMAIL_LOGIN_COMPLETED:
        case EMAIL_SIGN_UP_COMPLETED:
            return {
                ...state,
                authenticated: true,
                user: action.user
            };
        case LOG_OUT_COMPLETED:
            return {
                ...state,
                authenticated: false,
                user: null
            };
        default:
            return state;
    }
}
