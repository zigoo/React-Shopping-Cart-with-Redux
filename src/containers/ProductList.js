import { connect } from 'react-redux';
import ProductList from '../components/ProductList.js';

const mapStateToProps = (state) => {
  return {
    items: state.meble.items
  };
};

export default connect(mapStateToProps)(ProductList);
