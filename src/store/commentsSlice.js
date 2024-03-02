import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../components/Helpers/Api/Api";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";
import { actionIsAnimation } from "./homeSlice";
const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    productComments: [],
    productComment: {},
  },
  reducers: {
    setProductComments: (state, action) => {
      state.productComments = action.payload;
    },
    actionProductComment: (state, action) => {
      state.productComment = action.payload;
    },
  },
});
export const { setProductComments, actionProductComment } =
  commentsSlice.actions;

export const actionCreateComment = (data) => async (dispatch) => {
  data.status = "likes";
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

    const response = await sendRequest(`${API_URL}/comments`, "POST", comment);
    if (response) {
      dispatch(actionProductComment(response));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionUpdateComment = (data) => async (dispatch) => {
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
      `${API_URL}/comments/${id}`,
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

export const actionDeleteComment = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { id, token } = data;
    const deleteComment = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/comments/${id}`,
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

export const actionGetAllComments = () => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const response = await sendRequest(`${API_URL}/comments`, "GET");
    if (response) {
      console.log(response);
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionGetUserComments = (customerId) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const response = await sendRequest(
      `${API_URL}/comments/customer/${customerId}`,
      "GET"
    );
    if (response) {
      console.log(response);
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionGetProductComments = (productId) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const response = await sendRequest(
      `${API_URL}/comments/product/${productId}`,
      "GET"
    );
    if (response) {
      dispatch(setProductComments(response));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export default commentsSlice.reducer;
