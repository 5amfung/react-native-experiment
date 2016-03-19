/**
 * Tests for email-signup-actions.js
 */

jest.unmock('../signup');

import {
    EMAIL_SIGN_UP_START,
    EMAIL_SIGN_UP_SUCCESS,
    EMAIL_SIGN_UP_ERROR,
    emailSignUpStart,
    emailSignUpSuccess,
    emailSignUpError
} from '../signup';


describe('email sign up actions', () => {

    it('returns email sign up action', () => {
        const action = {
            type: EMAIL_SIGN_UP_START
        };
        expect(emailSignUpStart()).toEqual(action);
    });

    it('returns email sign up success action', () => {
        const user = {};
        const action = {
            type: EMAIL_SIGN_UP_SUCCESS,
            user
        };
        expect(emailSignUpSuccess(user).toEqual(action));
    });

    it('returns email sign up error action', () => {
        const error = {};
        const action = {
            type: EMAIL_SIGN_UP_ERROR,
            error
        };
        expect(emailSignUpError(error).toEqual(action));
    });

    it('signs up user', () => {
        // TODO: Implement.
        expect(true).toBeTruthy();
    });
});
