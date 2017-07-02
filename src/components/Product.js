import React from 'react';
import PropTypes from 'prop-types';
import { addToCart, removeCart, showBig } from '../helpers/actions.js';
import "../styles/product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.state = { active: false };
  }

  handleClick() {
    const currentState = this.state.active;
    const { dispatch } = this.props;
    this.setState({ active: !currentState });

    if (!currentState) {
      dispatch(addToCart(this.props.id));
    } else {
      dispatch(removeCart(this.props.id));
    }
  }

  handleMouseOver(id) {
    const { dispatch } = this.props;
    dispatch(showBig(id));
  }

  render() {
    return (
      <div id="inner">
        <div id="product">
          <img src={this.props.src} alt="product" onMouseOver={() => this.handleMouseOver(this.props.id)} />
            <span
              id="sp"
              className={this.state.active ? "glyphicon glyphicon-shopping-cart active" :
                                             "glyphicon glyphicon-heart inactive"}
              onClick={this.handleClick}
            >
            </span>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Product;
