import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatName: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { updatName } = userSlice.actions;
export default userSlice.reducer;
