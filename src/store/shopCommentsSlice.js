import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../components/Helpers/Api/Api";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";
import { actionIsAnimation } from "./homeSlice";
const shopCommentsSlice = createSlice({
  name: "shopComments",
  initialState: {},
  reducers: {},
});

export const {} = shopCommentsSlice.actions;

export const actionCreateShopComment = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { newComment, token } = data;
    const comment = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(newComment),
    };

    const response = await sendRequest(
      `${API_URL}/shop-comments`,
      "POST",
      comment
    );
    if (response) {
      console.log("wish create", response);
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionUpdateShopComment = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { newComment, token, id } = data;
    const comment = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(newComment),
    };

    const response = await sendRequest(
      `${API_URL}/shop-comments/${id}`,
      "PUT",
      comment
    );
    if (response) {
      console.log("wish create", response);
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionDeleteShopComment = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { id, token } = data;
    const deleteComment = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/shop-comments/${id}`,
      "DELETE",
      deleteComment
    );
    if (response.status === 200) {
      console.log("comment delete", response);
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionGetAllShopComments = () => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const response = await sendRequest(`${API_URL}/shop-comments`, "GET");
    if (response) {
      console.log(response);
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export default shopCommentsSlice.reducer;
