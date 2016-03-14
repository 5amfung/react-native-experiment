/**
 * Tests for email-login-actions.js.
 */

jest.unmock('../email-login-actions');

import {
    EMAIL_LOGIN_START,
    EMAIL_LOGIN_SUCCESS,
    EMAIL_LOGIN_ERROR,
    emailLoginStart,
    emailLoginSuccess,
    emailLoginError
} from '../email-login-actions';


describe('email login actions', () => {

    it('returns email login start action', () => {
        const action = {
            type: EMAIL_LOGIN_START
        };
        expect(emailLoginStart()).toEqual(action);
    });

    it('returns email login success action', () => {
        const user = {};
        const action = {
            type: EMAIL_LOGIN_SUCCESS,
            user
        };
        expect(emailLoginSuccess(user)).toEqual(action);
    });

    it('returns email login error action', () => {
        const error = {};
        const action = {
            type: EMAIL_LOGIN_ERROR,
            error
        };
        expect(emailLoginError(error)).toEqual(action);
    });
});
