import { connect } from 'react-redux';
import Productdesc from '../components/Productdesc.js';

const mapStateToProps = (state) => {
  const selected = state.meble.selectedID;
  return {
    opis: state.meble.items.find(krzeslo => krzeslo.id === selected)
  };
};

export default connect(mapStateToProps)(Productdesc);
