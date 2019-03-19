export const addToCart = (id) => {
    return {
        type: 'CART_ADD',
        id: id
    }
}