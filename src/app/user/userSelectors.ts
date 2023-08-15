import { RootState } from "../store";

export const selectUser = (state: RootState) => state.user.user;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectIsError = (state: RootState) => state.user.isError;
