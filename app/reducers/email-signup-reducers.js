/**
 * Email sign up reducer.
 */

import {
    EMAIL_SIGN_UP_START,
    EMAIL_SIGN_UP_SUCCESS,
    EMAIL_SIGN_UP_ERROR
} from '../actions/email-signup-actions';


const initialState = {
    inProgress: false,
    error: null
};

export default function emailSignUp(state = initialState, action) {
    switch (action.type) {
        case EMAIL_SIGN_UP_START:
            return {
                ...state,
                inProgress: true,
                error: null
            };
        case EMAIL_SIGN_UP_SUCCESS:
            return {
                ...state,
                inProgress: false
            };
        case EMAIL_SIGN_UP_ERROR:
            return {
                ...state,
                inProgress: false,
                error: action.error
            };
        default:
            return state;
    }
}

