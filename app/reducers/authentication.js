/**
 * Authentication reducer.
 */

import { AUTHENTICATE_START, AUTHENTICATE_SUCCESS, AUTHENTICATE_ERROR } from '../actions/authenticate';
import { EMAIL_LOGIN_ERROR, EMAIL_LOGIN_SUCCESS } from '../actions/login';
import { EMAIL_SIGN_UP_ERROR, EMAIL_SIGN_UP_SUCCESS } from '../actions/signup';
import { LOG_OUT_SUCCESS } from '../actions/logout';

const initialState = {
    inProgress: false,
    authenticated: false,
    user: null
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATE_START:
            return {
                ...state,
                inProgress: true,
                authenticated: false,
                user: null
            };
        case AUTHENTICATE_SUCCESS:
            return {
                ...state,
                inProgress: false,
                authenticated: true,
                user: action.user
            };
        case AUTHENTICATE_ERROR:
            return {
                ...initialState
            };
        case EMAIL_LOGIN_SUCCESS:
        case EMAIL_SIGN_UP_SUCCESS:
            return {
                ...state,
                authenticated: true,
                user: action.user
            };
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
