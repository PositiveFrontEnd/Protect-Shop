import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { actionIsAnimation } from "./homeSlice";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";
import { API_URL } from "../components/Helpers/Api/Api";
import { Resend } from "resend";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    letters: [],
    letterAll: [],
    importantLetters:[]
    
  },
  reducers: {
    actionAddLetter: (state, { payload }) => {
      state.letters = [...state.letters, payload];
    },
    actionLettersAll: (state, { payload }) => {
      state.letterAll = payload
    },
    actionAddToImportant: (state, { payload }) => {
      // const isAdded = state.importantLetters.some((item) => item === payload)
      // if (isAdded) {
      //   state.importantLetters = state.importantLetters.filter((item) => item === payload)
      // } else if (!isAdded) {
        state.importantLetters = payload
      // }
    }
  },
});
export const {
  actionAddLetter,
  actionAddToImportantState,
  actionLettersAll,
  actionAddToImportant
} = messageSlice.actions;

export const actionNewLetter = (data) => async (dispatch) => {
  console.log(data);
  data.status = "new"
  data.important = false
  try {
    dispatch(actionIsAnimation(true));
    const newLetter = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await sendRequest(`${API_URL}/letters`, "POST", newLetter);

    if (response) {
      console.log("catalog", response);
      dispatch(actionAddLetter(response));
      dispatch(actionAllLetters())
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionGetOneLetter = (id) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const response = await sendRequest(`${API_URL}/letters/${id}`, "GET");

    if (response) {
      console.log(response);
      return response
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionAllLetters = (id) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const response = await sendRequest(`${API_URL}/letters`, "GET");

    if (response) {
      dispatch(actionLettersAll(response))
      return response
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionDeleteLetter = (id) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const response = await sendRequest(`${API_URL}/letters/${id}`, "DELETE");
    if (response.status === 200) {
      console.log("delete letter", response);
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionUpdateLetter = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { letter, id } = data;
    const newLetter = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(letter),
    };

    const response = await sendRequest(
      `${API_URL}/letters/${id}`,
      "PUT",
      newLetter
    );

    if (response) {
      console.log(response)
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};


export default messageSlice.reducer;
