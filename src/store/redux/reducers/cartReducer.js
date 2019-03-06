const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CART_FETCH':
            return action.payload;

        case 'CART_ADD':
            return [...state, action.payload];

        case 'CART_REMOVE':
            const {id} = action.payload;

            return state.map((item, index) => {
                return item.id !== id;
            });

        default:
            return state;
    }
}
