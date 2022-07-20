import types from '../types';
export function decrement(data) {
  return {
    type: types.DECREMENT,
    payload: data,
  };
}
