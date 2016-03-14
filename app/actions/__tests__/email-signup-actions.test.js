/**
 * Tests for email-signup-actions.js
 */

jest.unmock('../email-signup-actions');

import {
    EMAIL_SIGN_UP_START,
    EMAIL_SIGN_UP_COMPLETED,
    EMAIL_SIGN_UP_FAILED,
    emailSignUpStart,
    emailSignUpCompleted,
    emailSignUpFailed
} from '../email-signup-actions';


describe('email sign up actions', () => {

    it('returns email sign up action', () => {
        const action = {
            type: EMAIL_SIGN_UP_START
        };
        expect(emailSignUpStart()).toEqual(action);
    });

    it('returns email sign up completed action', () => {
        const user = {};
        const action = {
            type: EMAIL_SIGN_UP_COMPLETED,
            user
        };
        expect(emailSignUpCompleted(user).toEqual(action));
    });

    it('returns email sign up failed action', () => {
        const error = {};
        const action = {
            type: EMAIL_SIGN_UP_FAILED,
            error
        };
        expect(emailSignUpFailed(error).toEqual(action));
    });

    it('signs up user', () => {
        // TODO: Implement.
        expect(true).toBeTruthy();
    });
});
