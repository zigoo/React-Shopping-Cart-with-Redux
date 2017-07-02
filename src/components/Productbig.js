import React  from 'react';
import PropTypes from 'prop-types';

class ProductBig extends React.Component {
  render() {
    const krzeslo = this.props.krzeslo;
    return (
     <div>
       <img className="img-responsive" src={krzeslo.src} alt="krzeslo_big" />
     </div>
    );
  }
}

ProductBig.propTypes = {
  krzeslo: PropTypes.object.isRequired,
};

export default ProductBig;
