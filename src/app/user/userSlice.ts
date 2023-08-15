import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user";

interface UserState {
  user: User;
  isLoading: boolean;
  isError: boolean;
}

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.isError = false;
      state.isLoading = true;
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, setIsLoading, setIsError } = userSlice.actions;
