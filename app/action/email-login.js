/**
 * Actions for email login.
 */

export const EMAIL_LOGIN_START = 'EMAIL_LOGIN_START';
export const EMAIL_LOGIN_COMPLETED = 'EMAIL_LOGIN_COMPLETED';
export const EMAIL_LOGIN_FAILED = 'EMAIL_LOGIN_FAILED';


export function emailLoginStart() {
    return {
        type: EMAIL_LOGIN_START
    };
}

export function emailLoginCompleted(user) {
    return {
        type: EMAIL_LOGIN_COMPLETED,
        user
    };
}

export function emailLoginFailed(error) {
    return {
        type: EMAIL_LOGIN_FAILED,
        error
    };
}

export function emailLogin(username, password) {
    return dispatch => {
        dispatch(emailLoginStart());

        // TODO:
        // Parse.User.login(username, password)
        //     .then(user => {
        //         dispatch(emailLoginCompleted(user));
        //     })
        //     .catch(error => {
        //         dispatch(emailLoginFailed(error));
        //     });

        let user = {
            id: 123,
            email: 'foo@example.com'
        };
        dispatch(emailLoginCompleted(user));
    };
}