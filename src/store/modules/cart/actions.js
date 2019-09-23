import {
  CART_ADD_REQUEST,
  CART_REMOVE,
  CART_ADD_SUCCESS,
  CART_UPDATE_AMOUNT_REQUEST,
  CART_UPDATE_AMOUNT_SUCCESS,
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

export function updateAmountRequest(id, amount) {
  return {
    type: CART_UPDATE_AMOUNT_REQUEST,
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: CART_UPDATE_AMOUNT_SUCCESS,
    id,
    amount,
  };
}
