export const initialState = {
    isAuthenticated: false,
    user: null
}

export function authReducer(state, action) {
    switch(action.type) {
        case 'AUTH_AUTHENTICATED':
            return {
                isAuthenticated: true,
                user: action.payload
            }
        case 'AUTH_UNAUTHENTICATED':
            return {
                isAuthenticated: false,
                user: null
            }
        default:
            return state;
    }
}