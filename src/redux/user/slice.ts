import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  loading: boolean;
  error: string | null;
  token: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
};

export const Login = createAsyncThunk(
  "user/Login",
  async (
    parameters: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    const { data } = await axios.post(`http://123.56.149.216:8080/auth/login`, {
      email: parameters.email,
      password: parameters.password,
    });
    return data.token;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [Login.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [Login.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.token = action.payload;
    },
    [Login.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
