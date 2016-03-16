/**
 * UI reducers.
 */

import {
    SHOW_EMAIL_LOG_IN_ERROR,
    HIDE_EMAIL_LOG_IN_ERROR,
    SHOW_EMAIL_SIGN_UP_ERROR,
    HIDE_EMAIL_SIGN_UP_ERROR,
    SELECT_TAB
} from '../actions/ui-actions';


const initialState = {
    emailLogInErrorVisible: false,
    emailSignUpErrorVisible: false,
    selectedTab: 'stores'
};

export default function ui(state = initialState, action) {
    switch (action.type) {
        case SHOW_EMAIL_LOG_IN_ERROR:
            return {
                ...state,
                emailLogInErrorVisible: true
            };
        case HIDE_EMAIL_LOG_IN_ERROR:
            return {
                ...state,
                emailLogInErrorVisible: false
            };
        case SHOW_EMAIL_SIGN_UP_ERROR:
            return {
                ...state,
                emailSignUpErrorVisible: true
            };
        case HIDE_EMAIL_SIGN_UP_ERROR:
            return {
                ...state,
                emailSignUpErrorVisible: false
            };
        case SELECT_TAB:
            return {
                ...state,
                selectedTab: action.tab
            };
        default:
            return state;
    }
}
