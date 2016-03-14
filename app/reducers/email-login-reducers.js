/**
 * Email log in reducer.
 */

import {
    EMAIL_LOGIN_START,
    EMAIL_LOGIN_SUCCESS,
    EMAIL_LOGIN_ERROR
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
                user: null,
                error: null
            };
        case EMAIL_LOGIN_SUCCESS:
            return {
                ...state,
                inProgress: false,
                user: action.user
            };
        case EMAIL_LOGIN_ERROR:
            return {
                ...state,
                inProgress: false,
                error: action.error
            };
        default:
            return state;
    }
}
