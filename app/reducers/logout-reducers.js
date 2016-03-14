/**
 * Log out reducers.
 */

import {
    LOG_OUT_START,
    LOG_OUT_SUCCESS,
    LOG_OUT_ERROR
} from '../actions/logout-actions';


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
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                inProgress: false
            };
        case LOG_OUT_ERROR:
            return {
                ...state,
                inProgress: false,
                error: action.error
            };
        default:
            return state;
    }
}
