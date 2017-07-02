import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cart.css';

class Productdesc extends React.Component {
  render() {
    const { id, name, cat, opis, price } = this.props.opis;
    return (
        <div>
          <div className="mebel__title">
            <h1>{name}</h1>
            {(name && name.length) &&
            <p>
              Kategoria : {cat} <br />
              produkt-id: {id} <br />
              cena : {price}
            </p>
            }
          </div>
          <div className="mebel__description">
            <p>{opis}</p>
          </div>
        </div>
    );
  }
}

Productdesc.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  cat: PropTypes.string,
  opis: PropTypes.object,
  price: PropTypes.number
};

export default Productdesc;
