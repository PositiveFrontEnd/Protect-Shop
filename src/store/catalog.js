import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../components/Helpers/Api/Api";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";
import { actionIsAnimation } from "./homeSlice";
const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    sortCatalogue: "",
    loadFilter: false,
  },
  reducers: {
    actionSortCatalogue: (state, { payload }) => {
      state.sortCatalogue = payload;
    },
    actionLoadFilter: (state, { payload }) => {
      state.loadFilter = payload;
    },
  },
});
export const { actionSortCatalogue, actionLoadFilter } = catalogSlice.actions;

export const actionAddNewCatalog = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { catalog, token } = data;
    const createRequest = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(catalog),
    };

    const response = await sendRequest(
      `${API_URL}/catalog`,
      "POST",
      createRequest
    );

    if (response) {
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionGetCatalog = () => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const response = await sendRequest(`${API_URL}/catalog`);

    if (response) {
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionGetCatalogId = (id) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const response = await sendRequest(`${API_URL}/catalog/${id}`);

    if (response) {
      return response;
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export default catalogSlice.reducer;
