import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { counterReducer } from './reducer/counterReducer';

const middleware = [thunk]
const store = createStore(counterReducer, applyMiddleware(...middleware));

export default store;
