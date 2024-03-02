import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { actionIsAnimation } from "./homeSlice";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";
import { API_URL } from "../components/Helpers/Api/Api";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
    favoriteForCustomer: [],
    guestFavorite: JSON.parse(localStorage.getItem("guestFavorite") || "[]"),
  },
  reducers: {
    actionFavorite: (state, { payload }) => {
      state.favoriteForCustomer = payload;
    },
    actionDeleteForCustomer: (state, { payload }) => {
      state.favoriteForCustomer = state.favoriteForCustomer.filter(
        (item) => item !== payload
      );
    },
    actionFavoriteForGuest: (state, { payload }) => {
      const isAdded = state.guestFavorite.some((item) => item === payload)
      if (isAdded) {
        state.guestFavorite = state.guestFavorite.filter((item) => item !== payload)
      } else {
        state.guestFavorite = [...state.guestFavorite, payload]
      }
      localStorage.setItem("guestFavorite", JSON.stringify(state.guestFavorite));
    },
    actionDeleteFavoriteForGuest: (state, { payload }) => { 
      state.guestFavorite = state.guestFavorite.filter((item) => item !== payload)
      localStorage.setItem("guestFavorite", JSON.stringify(state.guestFavorite));

    }
  },
});
export const { actionFavorite, actionDeleteForCustomer, actionFavoriteForGuest, actionDeleteFavoriteForGuest } =
  favoriteSlice.actions;

export const actionFavoriteForAll = (data) => async (dispatch) => {
  const {productId, token} = data
  if (token) {
    try {
      let isFavorite = await dispatch(actionGetFavorite(token));

        let productIds = isFavorite?.products.map((product) => product._id);

        if (isFavorite) {
          const isAdded = isFavorite.products.some(
            (product) => product._id === productId
          );

          if (isAdded) {
            await dispatch(
              actionDeleteFavoriteOneProduct({ id: productId, token })
            );
            productIds = productIds.filter((product) => product !== productId);
          } else {
            await dispatch(
              actionAddFavoriteOneProduct({ products: [productId], token })
            );
            productIds = [...productIds, productId];
          }
        } else {
          await dispatch(
            actionCreateFavorite({ products: [productId], token })
          );
          productIds = [productId];
        }
        dispatch(actionFavorite(productIds));
      } catch (error) {
        console.error("Сталася помилка під час виконання функції:", error);
      } finally {
        dispatch(actionIsAnimation(false));
      }
  } else if (!token) {
    dispatch(actionFavoriteForGuest(productId))
    }
  
  };

export const actionGetFavorite = (token) => async (dispatch) => {
  if (token) {
    try {
      dispatch(actionIsAnimation(true));
      const userToken = {
        headers: {
          Authorization: `${token}`,
        },
      };
      const response = await sendRequest(
        `${API_URL}/wishlist`,
        "GET",
        userToken
      );

      if (response) {
        // console.log("get favorite", response);
        return response;
      }
    } catch (error) {
      console.error("Сталася помилка під час виконання функції:", error);
    } finally {
      dispatch(actionIsAnimation(false));
    }
  }
};

export const actionCreateFavorite = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { products, token } = data;
    const newWishlist = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ products }),
    };

    const response = await sendRequest(
      `${API_URL}/wishlist`,
      "POST",
      newWishlist
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

export const actionAddFavoriteOneProduct = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { products, token } = data;
    // console.log(products);
    const newWishlist = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ products }),
    };
    const response = await sendRequest(
      `${API_URL}/wishlist/${products}`,
      "PUT",
      newWishlist
    );
    if (response) {
      console.log("wish change", response);
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionDeleteFavoriteOneProduct = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { id, token } = data;
    const deleteWishlist = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/wishlist/${id}`,
      "DELETE",
      deleteWishlist
    );
    if (response.status === 200) {
      console.log("wish one product delete", response);

      dispatch(actionDeleteForCustomer(id));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionDeleteFavorite = (token) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const deleteWishlist = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/wishlist`,
      "DELETE",
      deleteWishlist
    );

    if (response.status === 200) {
      console.log("Wishlist  delete", response);
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export default favoriteSlice.reducer;
