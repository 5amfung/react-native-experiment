/**
 * Location service reducer.
 */

import { GET_LOCATIONS_START, GET_LOCATIONS_SUCCESS, GET_LOCATIONS_ERROR } from '../actions/location-service';


const initialState = {
    loading: false,
    results: [],
    error: null
};

export default function locationService(state = initialState, action) {
    switch (action.type) {
        case GET_LOCATIONS_START:
            return {
                ...initialState,
                loading: true
            };
        case GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.results
            };
        case GET_LOCATIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
