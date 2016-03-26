/**
 * Service actions.
 */

import Parse from '../utils/parse';


export const GET_LOCATIONS_START = 'GET_LOCATIONS_START';
export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';
export const GET_LOCATIONS_ERROR = 'GET_LOCATIONS_ERROR';


export function getLocationsStart() {
    return {
        type: GET_LOCATIONS_START
    };
}

export function getLocationsSuccess(results) {
    return {
        type: GET_LOCATIONS_SUCCESS,
        results
    };
}

export function getLocationsError(error) {
    return {
        type: GET_LOCATIONS_ERROR,
        error
    };
}

export function getLocations(lat, lng) {
    return (dispatch) => {
        dispatch(getLocationsStart());
        let params = { lat, lng };
        return Parse.Cloud.run('getLocations', params).then((results) => {
            dispatch(getLocationsSuccess(results));
        }, (error) => {
            dispatch(getLocationsError(error));
        });
    };
}
