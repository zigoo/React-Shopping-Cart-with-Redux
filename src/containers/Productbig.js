import { connect } from 'react-redux';
import ProductBig from '../components/Productbig.js';

const mapStateToProps = (state) => {
  const selected = state.meble.selectedID;
  return {
    krzeslo: state.meble.items.find(krzeslo => krzeslo.id === selected)
  };
};

export default connect(mapStateToProps)(ProductBig);
