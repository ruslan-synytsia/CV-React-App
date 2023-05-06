import { createSlice } from '@reduxjs/toolkit';

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

export const selectStart = state => state.init.isStart;