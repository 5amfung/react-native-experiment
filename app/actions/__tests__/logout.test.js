/**
 * Test for logout-actions.js.
 */

jest.unmock('../logout');

import {
    LOG_OUT_START,
    LOG_OUT_SUCCESS,
    LOG_OUT_ERROR,
    logOutStart,
    logOutSuccess,
    logOutError
} from '../logout';


describe('log out actions', () => {

    it('returns log out start action', () => {
        const action = {
            type: LOG_OUT_START
        };
        expect(logOutStart()).toEqual(action);
    });

    it('returns log out success action', () => {
        const action = {
            type: LOG_OUT_SUCCESS
        };
        expect(logOutSuccess().toEqual(action));
    });

    it('returns log out error action', () => {
        const error = {};
        const action = {
            type: LOG_OUT_ERROR,
            error
        };
        expect(logOutError(error)).toEqual(action);
    });

    it('logs out user', () => {
        // TODO: Implement.
        expect(true).toBeTruthy();
    });
});
