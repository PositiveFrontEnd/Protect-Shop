import { createSlice } from "@reduxjs/toolkit";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";
import React from "react";

const novaPostSlice = createSlice({
  name: "novaPost",
  initialState: {
    addressData: [],
  },
  reducers: {
    actionUpdateAddressData: (state, { payload }) => {
      state.addressData = payload;
    },
  },
});

export const { actionUpdateAddressData } = novaPostSlice.actions;

export const actionNovaPostAdress = (test) => async (dispatch) => {
  const { city, data } = test;

  try {
    const point = {
      apiKey: "04ef085e312e199ccb9654304bc3e5c3",
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        FindByString: data,
        CityName: city,
        Page: "1",
        Language: "UA",
      },
    };

    const newAdress = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(point),
    };

    const response = await sendRequest(
      `https://api.novaposhta.ua/v2.0/json/`,
      "POST",
      newAdress
    );

    if (response) {
      dispatch(actionUpdateAddressData(response.data));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  }
};

export default novaPostSlice.reducer;
