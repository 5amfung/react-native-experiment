/**
 * Tests for email-login.js.
 */

import {
    EMAIL_LOGIN_START,
    EMAIL_LOGIN_COMPLETED,
    EMAIL_LOGIN_FAILED,
    emailLoginStart,
    emailLoginCompleted,
    emailLoginFailed
} from '../email-login';

jest.unmock('../email-login');

describe('email-login actions', () => {

    it('emailLoginStart', () => {
        const action = {
            type: EMAIL_LOGIN_START
        };
        expect(emailLoginStart()).toEqual(action);
    });

    it('emailLoginCompleted', () => {
        const user = {};
        const action = {
            type: EMAIL_LOGIN_COMPLETED,
            user
        };
        expect(emailLoginCompleted(user)).toEqual(action);
    });

    it('emailLoginFailed', () => {
        const error = {};
        const action = {
            type: EMAIL_LOGIN_FAILED,
            error
        };
        expect(emailLoginFailed(error)).toEqual(action);
    });

});