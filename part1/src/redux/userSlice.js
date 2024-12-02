import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Bi",
    age: 29,
    about: "I am a software engineer",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
    },
    deleteUser: (state, action) => {
      state.name = "";
      state.age = 0;
      state.about = "";
    },
  },
});

export const {update, deleteUser} = userSlice.actions;
export default userSlice.reducer;
