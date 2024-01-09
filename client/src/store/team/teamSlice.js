import { createSlice } from "@reduxjs/toolkit";
import {
  AddNewProduct,
  DeleteProduct,
  GetAllData,
  GetById,
} from "./api_actions";

const initialState = {
  team: [],
  loading: false,
  error: null,
  currentTeamMember: null,
};
const teamSlice = createSlice({
  name: "teamSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.team = action.payload;
      })
      .addCase(GetAllData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(GetById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentTeamMember = action.payload;
      })
      .addCase(GetById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //Add new prod
      .addCase(AddNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.team = [...state.team, action.payload];
      })
      .addCase(AddNewProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddNewProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE Prod
      .addCase(DeleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.team = action.payload;
      })
      .addCase(DeleteProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(DeleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const teamReducer = teamSlice.reducer;