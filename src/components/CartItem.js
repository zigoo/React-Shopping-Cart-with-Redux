import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { name, price } = this.props;
    return (
      <div className="cart_item">
        <span className="cart_item__name">{name} <br /></span>
        <span className="cart_item__price">Cena: {price} <br /></span>
      </div>
    );
  }
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartItem;
