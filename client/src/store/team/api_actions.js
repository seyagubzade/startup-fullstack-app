import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:8000/team";

export const GetAllData = createAsyncThunk("GetAllData", async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const GetById = createAsyncThunk("GetById", async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const AddNewProduct = createAsyncThunk("AddNewProduct", async (item) => {
  try {
    const response = await axios.post(BASE_URL, item);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const DeleteProduct = createAsyncThunk("DeleteProduct", async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});