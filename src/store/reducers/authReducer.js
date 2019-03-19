const initialState = {
    isAuthenticated: false,
    user: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_AUTHENTICATED':
            return {
                isAuthenticated: true,
                user: {
                    name: 'rudestewing',
                    avatar: '...'
                }
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