import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import initSlice from './Reducers/initReducer';

const rootReducer = combineReducers({
    init: initSlice
});

const store = configureStore({
  reducer: rootReducer
});

export default store;