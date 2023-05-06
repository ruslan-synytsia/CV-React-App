import { createSlice } from '@reduxjs/toolkit';
// import { createSelector } from 'reselect';

const initSlice = createSlice({
  name: 'init',
  initialState: {
    isStart: false
  },
  reducers: {
    setStart: (state, action) => {
      state.isStart = action.payload;
    }
  }
});

export const { setStart } = initSlice.actions;
export default initSlice.reducer;

// объявление селектора
export const selectStart = state => state.init.isStart;