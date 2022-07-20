import * as increment from './increment';
import * as decrement from './decrement';
import * as getData from './apiCall';
import * as getPosts from './posts';


export default {
  ...increment,
  ...decrement,
  ...getData,
  ...getPosts
};
