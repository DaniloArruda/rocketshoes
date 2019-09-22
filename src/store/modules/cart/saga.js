import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions';
import { CART_ADD_REQUEST } from './actionTypes';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest(CART_ADD_REQUEST, addToCart)]);
