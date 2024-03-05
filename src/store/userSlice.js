import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../components/Helpers/Api/Api";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";
import { actionIsAnimation } from "./homeSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: JSON.parse(localStorage.getItem("token") || null),
    // token: '',
    registrationModal: false,
    authorizationStatus: null,
    registrationStatus: "",
    registrationData: JSON.parse(localStorage.getItem("userdata") || "{}"),
    // registrationData:  "{}",

    correctData: "",
    isAdmin: JSON.parse(localStorage.getItem("isAdmin") || false),
  },
  reducers: {
    actionToken: (state, { payload }) => {
      state.token = payload;
      localStorage.setItem("token", JSON.stringify(state.token));
    },

    actionUserRegistrationData: (state, { payload }) => {
      state.registrationData = payload;
      localStorage.setItem("userdata", JSON.stringify(state.registrationData));
    },

    actionModalAfterRegistration: (state) => {
      state.registrationModal = !state.registrationModal;
    },

    actionErrorStatus: (state, { payload }) => {
      state.authorizationStatus = payload;
    },
    actionRegistrationStatus: (state, { payload }) => {
      state.registrationStatus = payload;
    },
    actionCorrectData: (state, { payload }) => {
      state.correctData = payload;
    },
    actionIsAdmin: (state, { payload }) => {
      state.isAdmin = payload;
      localStorage.setItem("isAdmin", JSON.stringify(state.isAdmin));

    },
  },
});
export const {
  actionToken,
  actionUserRegistrationData,
  actionModalAfterRegistration,
  actionErrorStatus,
  actionRegistrationStatus,
  actionCorrectData,
  actionIsAdmin,
} = userSlice.actions;

export const actionCorrectLogin = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { loginOrEmail, password } = data;
    const userLogin = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginOrEmail: `${loginOrEmail}`,
        password: `${password}`,
      }),
    };

    const response = await sendRequest(
      `${API_URL}/customers/login`,
      "POST",
      userLogin
    );
    if (response) {
      dispatch(actionToken(response.token));
      const data = await dispatch(actionCustomersInfo(response.token));

      await dispatch(actionUserRegistrationData(data));
      dispatch(actionIsAdmin(data.isAdmin));
    } else {
      // console.log("переводжу на регістрацію");
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
    // console.log(error.message)
    dispatch(actionErrorStatus(error.message));
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionRegistration = (customer) => async (dispatch, getState) => {
  try {
    dispatch(actionIsAnimation(true));
    const newCustomer = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    };
    const response = await sendRequest(
      `${API_URL}/customers`,
      "POST",
      newCustomer
    );
    if (response) {
      const state = getState();
      console.log("Успішна відповідь:", response);
      const registrationData = state.user.registrationData;
      dispatch(
        actionCorrectLogin({
          loginOrEmail: registrationData.email,
          password: registrationData.password,
        })
      );
      await dispatch(actionModalAfterRegistration(state.registrationModal));
      dispatch(actionRegistrationStatus("ok"));
    }
  } catch (error) {
    // console.error("Сталася помилка під час виконання функції:", error);
    dispatch(actionRegistrationStatus("error"));
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionCustomersInfo = (token) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const newCustomer = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/customers/customer`,
      "GET",
      newCustomer
    );
    if (response) {
      // console.log("Успішна відповідь:", response);
      return response;
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionUpdateCustomer = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { token, customerInfo } = data;
    const newCustomer = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(customerInfo),
    };
    const response = await sendRequest(
      `${API_URL}/customers`,
      "PUT",
      newCustomer
    );
    if (response) {
      // console.log("Успішна відповідь:", response);
      dispatch(actionCorrectData("ok"));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionChangePassword = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { token, password } = data;
    const newPassword = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(password),
    };
    const response = await sendRequest(
      `${API_URL}/customers/password`,
      "PUT",
      newPassword
    );
    if (response) {
      // console.log("Успішна відповідь:", response);
      dispatch(actionCorrectData("ok"));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export default userSlice.reducer;
