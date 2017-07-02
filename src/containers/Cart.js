import { connect } from 'react-redux';
import Cart from '../components/Cart.js';

const mapStateToProps = (state) => {
  return {
    cart: state.meble.cart,
    items: state.meble.items   
  };
};

export default connect(mapStateToProps)(Cart);
