import types from '../types';

export function increment(data) {
  return {
    type: types.INCREMENT,
    payload: data,
  };
}
