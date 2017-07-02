import { connect } from 'react-redux';
import Product from '../components/Product.js';

const mapStateToProps = (state) => {
  return {
    items: state.meble.items,
    cart: state.meble.cart
  };
};

export default connect(mapStateToProps)(Product);
