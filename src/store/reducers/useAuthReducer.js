import {useReducer} from 'react';

export const useAuthReducer = () => {
    let initialState = {
        isAuthenticated: false,
        user: null
    }

    const authReducer = (state, action) => {
        switch(action.type) {
            case 'AUTH_SET_AUTHENTICATED':
                const {username, avatar} = action.payload;
                return {
                    isAuthenticated: true,
                    user: {
                        username: username,
                        avatar: avatar
                    }
                }
            
            case 'AUTH_SET_UNAUTHENTICATED':
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