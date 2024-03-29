import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../components/Helpers/Api/Api";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";
import { actionIsAnimation } from "./homeSlice";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderState: [],
    productsForOrderGuest: JSON.parse(
      localStorage.getItem("productsForOrderGuest") || "{}"
    ),
    infoForOrderGuest: JSON.parse(
      localStorage.getItem("productsForOrderGuest") || "[]"
    ),
    deliveryForOrderGuest: JSON.parse(
      localStorage.getItem("deliveryForOrderGuest") || "{}"
    ),
    order: {
      letterSubject: "Thank you for order!",
    },
    promoCodePrice: "",

    orderGuest: {
      letterSubject: "Thank you for order!",
    },
  },
  reducers: {
    actionProductsOrderForGuest: (state, { payload }) => {
      state.productsForOrderGuest = payload;
      localStorage.setItem(
        "productsForOrderGuest",
        JSON.stringify(state.productsForOrderGuest)
      );
    },
    actionInfoOrderForGuest: (state, { payload }) => {
      state.infoForOrderGuest = payload;
      localStorage.setItem(
        "infoForOrderGuest",
        JSON.stringify(state.infoForOrderGuest)
      );
    },

    actionUpDateForm: (state, { payload }) => {
      state.order = { ...state.order, ...payload };
    },
    actionPromocodePrice: (state, { payload }) => {
      state.promoCodePrice = payload;
    },
    actionClearPromoCode: (state) => {
      state.promoCodePrice = "";
    },
    actionAddOrder: (state, { payload }) => {
      state.orderState = payload;
    },
    actionUpDateFormGuest: (state, { payload }) => {
      state.orderGuest = payload;
    },
  },
});
export const {
  actionAddOrder,
  actionProductsOrderForGuest,
  actionInfoOrderForGuest,
  actionDeliveryOrderForGuest,
  actionUpDateForm,
  actionPromocodePrice,
  actionClearPromoCode,
  actionUpDateFormGuest,
  actionCreateLetter,
  actionCreateLetterGuest,
} = orderSlice.actions;

export const actionCreateNewOrderLoggerCustomer =
  (data) => async (dispatch) => {
    try {
      dispatch(actionIsAnimation(true));
      const { order, token } = data;
      order.status = "not shipped";

      const newOrder = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(order),
      };
      const response = await sendRequest(`${API_URL}/orders`, "POST", newOrder);

      if (response) {
        dispatch(actionAddOrder(response));
      }
    } catch (error) {
      console.error("Сталася помилка під час виконання функції:", error);
    } finally {
      dispatch(actionUpDateForm({ promoCode: 0 }));
      dispatch(actionIsAnimation(false));
    }
  };

export const actionCreateNewOrderNotLoggerCustomer =
  (order) => async (dispatch) => {
    try {
      dispatch(actionIsAnimation(true));
      order.status = "not shipped";
      const newOrder = {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      };
      const response = await sendRequest(`${API_URL}/orders`, "POST", newOrder);

      if (response) {
        return response;
      }
    } catch (error) {
      console.error("Сталася помилка під час виконання функції:", error);
    } finally {
      dispatch(actionUpDateFormGuest({ promoCode: 0 }));
      dispatch(actionIsAnimation(false));
    }
  };
export const actionDeleteOrder = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { id, token } = data;
    const deleteOrder = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/orders/${id}`,
      "DELETE",
      deleteOrder
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionGetOllUserOrders = (token) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));

    const newOrder = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/orders/user`,
      "GET",
      newOrder
    );

    if (response) {
      dispatch(actionAddOrder(response));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionSearchByOrderNo = (data) => async (dispatch) => {
  try {
    const { token, orderNo } = data;
    dispatch(actionIsAnimation(true));
    const newOrder = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/orders/user/${orderNo}`,
      "GET",
      newOrder
    );

    if (response) {
      return response;
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionGetAllOrders = () => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const response = await sendRequest(`${API_URL}/orders`, "GET");

    if (response) {
      return response;
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionUpdateOrder = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { order, token, id, datahtml, subscriberMail } = data;

    order.email = subscriberMail;
    order.letterSubject = "Your order was changed";
    order.letterHtml = `<h3>Hello ${datahtml.firstName}</h3>
    <p>Order status #${datahtml.orderNo} has been changed to "${order.status}"</p>
    <p>Your PROTECT team</p>
    `;

    const newOrder = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(order),
    };
    const response = await sendRequest(
      `${API_URL}/orders/${id}`,
      "PUT",
      newOrder
    );

    if (response) {
      return response;
    }
  } catch (error) {
    const { order, token, id, subscriberMail } = data;

    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export default orderSlice.reducer;
