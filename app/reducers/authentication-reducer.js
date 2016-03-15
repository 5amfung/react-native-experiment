/**
 * Authentication reducer.
 */

import { AUTHENTICATE_SUCCESS, AUTHENTICATE_ERROR } from '../actions/authenticate-actions';
import { EMAIL_LOGIN_ERROR, EMAIL_LOGIN_SUCCESS } from '../actions/email-login-actions';
import { EMAIL_SIGN_UP_ERROR, EMAIL_SIGN_UP_SUCCESS } from '../actions/email-signup-actions';
import { LOG_OUT_SUCCESS } from '../actions/logout-actions';

const initialState = {
    authenticated: false,
    user: null
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATE_SUCCESS:
        case EMAIL_LOGIN_SUCCESS:
        case EMAIL_SIGN_UP_SUCCESS:
            return {
                ...state,
                authenticated: true,
                user: action.user
            };
        case AUTHENTICATE_ERROR:
        case EMAIL_LOGIN_ERROR:
        case EMAIL_SIGN_UP_ERROR:
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                authenticated: false,
                user: null
            };
        default:
            return state;
    }
}
