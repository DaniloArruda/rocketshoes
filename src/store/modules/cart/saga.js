import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { CART_ADD_REQUEST, CART_UPDATE_AMOUNT_REQUEST } from './actionTypes';
import { formatPrice } from '../../../util/format';

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.warn('Quantidade fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;
    yield updateAmount({ id, amount });
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

export default all([
  takeLatest(CART_ADD_REQUEST, addToCart),
  takeLatest(CART_UPDATE_AMOUNT_REQUEST, updateAmount),
]);
