/**
 * Tests for email-login-actions.js.
 */

jest.unmock('../email-login-actions');

import {
    EMAIL_LOGIN_START,
    EMAIL_LOGIN_COMPLETED,
    EMAIL_LOGIN_FAILED,
    emailLoginStart,
    emailLoginCompleted,
    emailLoginFailed
} from '../email-login-actions';


describe('email login actions', () => {

    it('returns email login start action', () => {
        const action = {
            type: EMAIL_LOGIN_START
        };
        expect(emailLoginStart()).toEqual(action);
    });

    it('returns email login completed action', () => {
        const user = {};
        const action = {
            type: EMAIL_LOGIN_COMPLETED,
            user
        };
        expect(emailLoginCompleted(user)).toEqual(action);
    });

    it('returns email login failed action', () => {
        const error = {};
        const action = {
            type: EMAIL_LOGIN_FAILED,
            error
        };
        expect(emailLoginFailed(error)).toEqual(action);
    });
});
