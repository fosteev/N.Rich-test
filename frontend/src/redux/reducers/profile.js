import {
    AUTH_PROFILE, EXIT_PROFILE
} from '../actions/profile';

const initialState = {
    isAuthenticated: false,
    profile: {}
};

export default function profile(state = initialState, action) {
    switch (action.type) {
        case AUTH_PROFILE: {
            return {
                isAuthenticated: true,
                profile: action.data
            }
        }
        case EXIT_PROFILE: {
            return {
                isAuthenticated: false,
                profile: {}
            }
        }
        default:
            return state;
    }
}
