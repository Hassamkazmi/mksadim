import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Reducer comes here
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
          state.isFetching = false;
          state.isSuccess = true;
          state.email = payload.user.email;
          state.username = payload.user.name;
        },
        [signupUser.pending]: (state) => {
          state.isFetching = true;
        },
        [signupUser.rejected]: (state, { payload }) => {
          state.isFetching = false;
          state.isError = true;
          state.errorMessage = payload.message;
        }
    }
})
export const userSelector = state => state.user