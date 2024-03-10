import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../components/Helpers/Api/Api";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";
import { actionIsAnimation } from "./homeSlice";
const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    priceGuest: "''",
    guestBasket: JSON.parse(localStorage.getItem("guestBasket") || "{}"),
  },
  reducers: {
    actionAddBaskets: (state, { payload }) => {
      state.basket = payload;
    },
    actionAddToBasketForGuest: (state, { payload }) => {
      const isAdded = state.guestBasket.hasOwnProperty(payload);
      if (isAdded) {
        state.guestBasket[payload].counter += 1;
        localStorage.setItem("guestBasket", JSON.stringify(state.guestBasket));
      } else {
        state.guestBasket = {
          ...state.guestBasket,
          [payload]: { payload, counter: 1 },
        };
        localStorage.setItem("guestBasket", JSON.stringify(state.guestBasket));
      }
    },
    actionPlusBasketForGuest: (state, { payload }) => {
      state.guestBasket[payload].counter += 1;
      localStorage.setItem("guestBasket", JSON.stringify(state.guestBasket));
    },
    actionMinusBasketForGuest: (state, { payload }) => {
      if (state.guestBasket[payload].counter > 0) {
        state.guestBasket[payload].counter -= 1;
        if (state.guestBasket[payload].counter === 0) {
          delete state.guestBasket[payload];
        }
        localStorage.setItem("guestBasket", JSON.stringify(state.guestBasket));
      }
    },
    actionPriseForGuest: (state, { payload }) => {
      state.priceGuest = payload;
    },
    actionDeleteGuestBasket: (state) => {
      state.guestBasket = {};
      localStorage.setItem("guestBasket", JSON.stringify(state.guestBasket));
    },

    actionDeleteOneForGuest: (state, { payload }) => {
      const { [payload]: removedItem, ...newBought } = state.guestBasket;
      state.guestBasket = newBought;
      localStorage.setItem("guestBasket", JSON.stringify(state.guestBasket));
    },
  },
});
export const {
  actionAddBaskets,
  actionAddToBasketForGuest,
  actionDeleteOneForGuest,
  actionPlusBasketForGuest,
  actionMinusBasketForGuest,
  actionPriseForGuest,
  actionDeleteGuestBasket,
} = basketSlice.actions;

export const actionGetBasket = (token) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const newBasket = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };

    const response = await sendRequest(`${API_URL}/cart`, "GET", newBasket);

    if (response) {
      dispatch(actionAddBaskets(response));
      return response;
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionCreateBasket = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { products, token } = data;
    const newBasket = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ products }),
    };

    const response = await sendRequest(`${API_URL}/cart`, "POST", newBasket);

    if (response) {
      dispatch(actionAddBaskets(response));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionAddBasketOneProduct = (data) => (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { token, product } = data;
    const newBasket = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        body: JSON.stringify({ product }),
      },
    };

    return sendRequest(`${API_URL}/cart/${product}`, "PUT", newBasket)
      .then((response) => {
        if (response) {
          dispatch(actionAddBaskets(response));
        }

        dispatch(actionIsAnimation(false));
      })
      .catch((error) => {
        console.error("Помилка:", error);
        if (error.response) {
          console.error("Деталі помилки:", error.response.response);
        }
      });
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionChangeBasket = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { token, products } = data;
    const newBasket = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ products }),
    };

    const response = await sendRequest(`${API_URL}/cart`, "PUT", newBasket);

    if (response) {
      dispatch(actionAddBaskets(response));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionDeleteBasketOneProduct = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { id, token } = data;
    const deleteBasket = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/cart/${id}`,
      "DELETE",
      deleteBasket
    );

    if (response.status === 200) {
      const responseData = await response.json();
      dispatch(actionAddBaskets(responseData));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionDeleteBasket = (token) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const deleteBasket = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/cart`,
      "DELETE",
      deleteBasket
    );

    if (response.status === 200) {
      const responseData = await response.json();
      dispatch(actionAddBaskets(responseData));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionDecreaseProduct = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { id, token } = data;
    const decrease = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/cart/product/${id}`,
      "DELETE",
      decrease
    );

    if (response.status === 200) {
      const responseData = await response.json();
      dispatch(actionAddBaskets(responseData));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export default basketSlice.reducer;
