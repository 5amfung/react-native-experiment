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
    error: null
};

export default function emailLogIn(state = initialState, action) {
    switch (action.type) {
        case EMAIL_LOGIN_START:
            return {
                ...state,
                inProgress: true,
                error: null
            };
        case EMAIL_LOGIN_SUCCESS:
            return {
                ...state,
                inProgress: false
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
