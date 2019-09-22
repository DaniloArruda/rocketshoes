import {
  CART_ADD_REQUEST,
  CART_REMOVE,
  CART_UPDATE_AMOUNT,
  CART_ADD_SUCCESS,
} from './actionTypes';

export function addToCartRequest(id) {
  return {
    type: CART_ADD_REQUEST,
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: CART_ADD_SUCCESS,
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: CART_REMOVE,
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: CART_UPDATE_AMOUNT,
    id,
    amount,
  };
}
