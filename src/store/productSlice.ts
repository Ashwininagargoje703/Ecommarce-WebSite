import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ProductState {
  data: [];
  page: number;
  loading: boolean;
  error: boolean;
}

const initialState: ProductState = {
  data: [],
  page: 1,
  loading: false,
  error: false,
};

export const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {},
  },
});
