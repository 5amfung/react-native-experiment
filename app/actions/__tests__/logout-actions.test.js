/**
 * Test for logout-actions.js.
 */

jest.unmock('../logout-actions');

import {
    LOG_OUT_START,
    LOG_OUT_COMPLETED,
    LOG_OUT_FAILED,
    logOutStart,
    logOutCompleted,
    logOutFailed
} from '../logout-actions';


describe('log out actions', () => {

    it('returns log out start action', () => {
        const action = {
            type: LOG_OUT_START
        };
        expect(logOutStart()).toEqual(action);
    });

    it('returns log out completed action', () => {
        const action = {
            type: LOG_OUT_COMPLETED
        };
        expect(logOutCompleted().toEqual(action));
    });

    it('returns log out failed action', () => {
        const error = {};
        const action = {
            type: LOG_OUT_FAILED,
            error
        };
        expect(logOutFailed(error)).toEqual(action);
    });

    it('logs out user', () => {
        // TODO: Implement.
        expect(true).toBeTruthy();
    });
});
