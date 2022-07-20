import types from '../types';

export const getData = () => {
  try {
    return async dispatch => {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(responce => responce.json())
        .then(res => {
          dispatch({
            type: types.RESOLVED_DATA,
            payload: res,
          });
        });
    };
  } catch {
    console.log('fetch data are not hear');
  }
};
