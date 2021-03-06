/**
 * Tests for email login reducer.
 */

jest.unmock('../../actions/login');
jest.unmock('../login');

import {
    emailLoginStart,
    emailLoginSuccess,
    emailLoginError
} from '../../actions/login';
import emailLogin from '../login';


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

    it('emailLoginSuccess', () => {
        let user = {};
        let beforeState = {
            inProgress: true,
            error: null
        };
        let afterState = {
            inProgress: false,
            error: null
        };
        expect(emailLogin(beforeState, emailLoginSuccess(user))).toEqual(afterState);
    });

    it('emailLoginError', () => {
        let error = {};
        let beforeState = {
            inProgress: true,
            error: null
        };
        let afterState = {
            inProgress: false,
            error
        };
        expect(emailLogin(beforeState, emailLoginError(error))).toEqual(afterState);
    });
});
