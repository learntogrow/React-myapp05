import { connect } from 'react-redux';
import Cart from '../components/cart/cart';
import { getItems, getCurrency, getTotal, removeFromCart } from '../ducks/cart';

const mapStateToProps = (state, props) => { 
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({  // remove item from cart
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart); //gluing up component and state --> tied up to react
//3 1st 2 are func pointer, 3rd obj pointers object to class(which component to connect)
//connect is returning fun pointer...
//after connect call is done it returns pointer(redux will do later)

//mapStateToProps == creataing func, returns obj, obj contain 3 attribute, they dont have data, they have func pointers
//getItems, getCurrency, getTotal
//removeFromCart ==> wrapperfunction
//connect 