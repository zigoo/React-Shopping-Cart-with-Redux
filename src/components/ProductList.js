import React from 'react';
import PropTypes from 'prop-types';
import Product from '../containers/Product.js';

class ProductList extends React.Component {
  render() {
    const meble = this.props.items;

    return (
      <div className="productlist_product">
        {meble.map(mebel =>
          <Product key={mebel.id} src={mebel.src} id={mebel.id} />
        )}
      </div>
    );
  }
}

ProductList.propTypes = {
 items: PropTypes.array.isRequired
};

export default ProductList;
