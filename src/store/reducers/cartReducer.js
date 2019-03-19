const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CART_ADD':
            return [
                ...state, {
                    id: 'r4tgWQer',
                    name: 'mouse',
                    price: 90000,
                    qty: 10
                }
            ]

        case 'CART_REMOVE':
            const newCarts = state.map((item, index) => {
                return item.id !== action.id
            });
            return newCarts;
            
        default:
            return state;
    }
}