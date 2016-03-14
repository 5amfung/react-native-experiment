/**
 * UI actions.
 */

// Log in.
export const SHOW_EMAIL_LOG_IN_SUCCESS = 'SHOW_EMAIL_LOG_IN_SUCCESS';
export const HIDE_EMAIL_LOG_IN_SUCCESS = 'HIDE_EMAIL_LOG_IN_SUCCESS';
export const SHOW_EMAIL_LOG_IN_ERROR = 'SHOW_EMAIL_LOG_IN_ERROR';
export const HIDE_EMAIL_LOG_IN_ERROR = 'HIDE_EMAIL_LOG_IN_ERROR';
export const HIDE_EMAIL_LOG_IN_IN_PROGRESS = 'HIDE_EMAIL_LOG_IN_IN_PROGRESS';

export function showEmailLogInSuccess() {
    return { type: SHOW_EMAIL_LOG_IN_SUCCESS };
}

export function hideEmailLogInSuccess() {
    return { type: HIDE_EMAIL_LOG_IN_SUCCESS };
}

export function showEmailLogInError() {
    return { type: SHOW_EMAIL_LOG_IN_ERROR };
}

export function hideEmailLogInError() {
    return { type: HIDE_EMAIL_LOG_IN_ERROR };
}

export function hideEmailLogInInProgress() {
    return { type: HIDE_EMAIL_LOG_IN_IN_PROGRESS };
}


// Sign up.
export const SHOW_EMAIL_SIGN_UP_SUCCESS = 'SHOW_EMAIL_SIGN_UP_SUCCESS';
export const HIDE_EMAIL_SIGN_UP_SUCCESS = 'HIDE_EMAIL_SIGN_UP_SUCCESS';
export const SHOW_EMAIL_SIGN_UP_ERROR = 'SHOW_EMAIL_SIGN_UP_ERROR';
export const HIDE_EMAIL_SIGN_UP_ERROR = 'HIDE_EMAIL_SIGN_UP_ERROR';
export const HIDE_EMAIL_SIGN_UP_IN_PROGRESS = 'HIDE_EMAIL_SIGN_UP_IN_PROGRESS';

export function showEmailSignUpSuccess() {
    return { type: SHOW_EMAIL_SIGN_UP_SUCCESS };
}

export function hideEmailSignUpSuccess() {
    return { type: HIDE_EMAIL_SIGN_UP_SUCCESS };
}

export function showEmailSignUpError() {
    return { type: SHOW_EMAIL_SIGN_UP_ERROR };
}

export function hideEmailSignUpError() {
    return { type: HIDE_EMAIL_SIGN_UP_ERROR };
}

export function hideEmailSignUpInProgress() {
    return { type: HIDE_EMAIL_SIGN_UP_IN_PROGRESS };
}
