import React from 'react';
import PropTypes from 'prop-types';
import Cartitem from '../components/CartItem.js';
import '../styles/cart.css';

class Cart extends React.Component {
  render() {
    const cart = this.props.cart;
    const items = this.props.items;
    let total = 0;

    const cartItems = cart.map(cartItemId => (
            items.find(productItem => productItem.id === cartItemId)));

    cartItems.map(cartItem => (
            items.find(productItem => productItem.price === cartItem.price,
              total += cartItem.price)
    ));
    return (
      <div>
        <div className="cart">
          {cart.length > 0 &&
          <div>
            <h3>Koszyk</h3>
            <ul>
              {cartItems.map(cartItem => (
                <li key={cartItem.id}>
                  <Cartitem name={cartItem.name} price={cartItem.price} />
                </li>
              ))}
              <br />
              <p>Lacznie: {total} zł</p>
            </ul>
            </div>
          }
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
};

export default Cart;
