/**
 * Tests for email login reducer.
 */

jest.unmock('../../actions/email-login-actions');
jest.unmock('../email-login-reducers');

import {
    emailLoginStart,
    emailLoginCompleted,
    emailLoginFailed
} from '../../actions/email-login-actions';
import emailLogin from '../email-login-reducers';


describe('email login reducers', () => {

    let initialState = {
        inProgress: false,
        error: null
    };

    it('returns initial state.', () => {
        expect(emailLogin(undefined, {})).toEqual(initialState);
    });

    it('returns same state if actions is unknown', () => {
        let beforeState = { foo: 'bar' };
        expect(emailLogin(beforeState, {})).toEqual(beforeState);
    });

    it('emailLoginStart', () => {
        let beforeState = {
            inProgress: false,
            error: null
        };
        let afterState = {
            inProgress: true,
            error: null
        };
        expect(emailLogin(beforeState, emailLoginStart())).toEqual(afterState);
    });

    it('emailLoginCompleted', () => {
        let user = {};
        let beforeState = {
            inProgress: true,
            error: null
        };
        let afterState = {
            inProgress: false,
            error: null
        };
        expect(emailLogin(beforeState, emailLoginCompleted(user))).toEqual(afterState);
    });

    it('emailLoginFailed', () => {
        let error = {};
        let beforeState = {
            inProgress: true,
            error: null
        };
        let afterState = {
            inProgress: false,
            error
        };
        expect(emailLogin(beforeState, emailLoginFailed(error))).toEqual(afterState);
    });
});
