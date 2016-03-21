/**
 * UI actions.
 */

/**
 * Email log in actions.
 */
export const SHOW_EMAIL_LOG_IN_ERROR = 'SHOW_EMAIL_LOG_IN_ERROR';
export const HIDE_EMAIL_LOG_IN_ERROR = 'HIDE_EMAIL_LOG_IN_ERROR';

export function showEmailLogInError() {
    return { type: SHOW_EMAIL_LOG_IN_ERROR };
}

export function hideEmailLogInError() {
    return { type: HIDE_EMAIL_LOG_IN_ERROR };
}

/**
 * Sign up actions.
 */
export const SHOW_EMAIL_SIGN_UP_ERROR = 'SHOW_EMAIL_SIGN_UP_ERROR';
export const HIDE_EMAIL_SIGN_UP_ERROR = 'HIDE_EMAIL_SIGN_UP_ERROR';

export function showEmailSignUpError() {
    return { type: SHOW_EMAIL_SIGN_UP_ERROR };
}

export function hideEmailSignUpError() {
    return { type: HIDE_EMAIL_SIGN_UP_ERROR };
}
