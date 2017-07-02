import productsData from '../helpers/meble.js';

const SHOW_BIG = 'SHOW_BIG';
const ADDCART = 'ADDCART';
const REMOVECART = 'REMOVECART';

const initialState = {
  items: productsData,
  selectedID: 1,
  cart: [],
  total: 0
};


export default function prodReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_BIG:
      return {
        ...state,
        selectedID: action.id
      };
    case ADDCART:
      return {
        ...state,
        cart: [...state.cart, action.id]   
      };
    case REMOVECART:
      return {
        ...state,
        cart: state.cart.filter(id => id !== action.id),
      };
    default:
      return state;
  }
}
