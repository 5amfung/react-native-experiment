/**
 * Reducer for email sign up.
 */

import {
    EMAIL_SIGN_UP_START,
    EMAIL_SIGN_UP_COMPLETED,
    EMAIL_SIGN_UP_FAILED
} from '../action/email-signup';


const initialState = {
    inProgress: false,
    user: null,
    error: null
};

export default function emailSignUp(state = initialState, action) {
    switch (action.type) {
        case EMAIL_SIGN_UP_START:
            return {
                ...state,
                inProgress: true,
                user: null
            };
        case EMAIL_SIGN_UP_COMPLETED:
            return {
                ...state,
                inProgress: false,
                user: action.user
            };
        case EMAIL_SIGN_UP_FAILED:
            return {
                ...state,
                inProgress: false,
                error: action.error
            };
        default:
            return state;
    }
}

