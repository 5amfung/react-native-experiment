/**
 * Log out reducers.
 */

import {
    LOG_OUT_START,
    LOG_OUT_COMPLETED,
    LOG_OUT_FAILED
} from '../actions/log-out-actions';


const initialState = {
    inProgress: false,
    error: null
};


export default function logOut(state = initialState, action) {
    switch (action.type) {
        case LOG_OUT_START:
            return {
                ...state,
                inProgress: true,
                error: null
            };
        case LOG_OUT_COMPLETED:
            return {
                ...state,
                inProgress: false
            };
        case LOG_OUT_FAILED:
            return {
                ...state,
                inProgress: false,
                error: action.error
            };
        default:
            return state;
    }
}
