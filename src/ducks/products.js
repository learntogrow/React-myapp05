// reducer
export default function products(state = []) {
    return state; // nothing to do here, but we need products node in redux store// returning state so reducer
}

// selectors
export function getProducts(state, props) {
    return state.products;// accessor function
}

export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}