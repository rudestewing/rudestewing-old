import {useReducer} from 'react';

export function useAuthReducer() {
    const initialState = {
        isAuthenticated: false,
        user: null
    }

    function authReducer(state, action) {
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

    const [auth, authDispatch] = useReducer(authReducer, initialState);
    
    return {
        auth: auth,
        authDispatch: authDispatch
    }
}