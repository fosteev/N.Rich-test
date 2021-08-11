export const AUTH_PROFILE = 'AUTH_PROFILE';

export function authProfile(data) {
    return {
        type: AUTH_PROFILE,
        data: data
    }
}

export const EXIT_PROFILE = 'EXIT_PROFILE';

export function exitProfile(data) {
    return {
        type: EXIT_PROFILE,
        data: data
    }
}
