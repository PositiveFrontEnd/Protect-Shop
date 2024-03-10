import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../components/Helpers/Api/Api";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";
import { actionIsAnimation } from "./homeSlice";
import { actionLoadFilter } from "./catalog";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productsByCategory: [],
    productsByType: [],
    oneProduct: {},
    ThreeProducts: JSON.parse(localStorage.getItem("Threeproducts") || "[]"),
    ThreeColors: [],
    filters: [],
    twelveProducts: [],
    twelveFiltersProducts: [],
    searchProducts: [],
    youSee: [],
    previewProductInfo: {},
    previewProductInfo: {},
    isLoading: false,
  },
  reducers: {
    actionProducts: (state, { payload }) => {
      state.products = payload;
    },
    actionYouSee: (state, { payload }) => {
      const isProductIncluded = state.youSee.some(
        (product) => product._id === payload._id
      );
      if (!isProductIncluded) {
        state.youSee = [...state.youSee, payload];
      }
    },
    actionTwelveProductsbyCategory: (state, { payload }) => {
      state.productsByCategory = payload;
    },
    actionTwelveProductsbyType: (state, { payload }) => {
      state.productsByType = payload;
    },
    actionSearch: (state, { payload }) => {
      state.searchProducts = payload;
    },
    actionOneProduct: (state, { payload }) => {
      state.oneProduct = payload;
    },
    actionThreeProducts: (state, { payload }) => {
      state.ThreeProducts = payload;
      localStorage.setItem(
        "Threeproducts",
        JSON.stringify(state.ThreeProducts)
      );
    },
    actionThreeColors: (state, { payload }) => {
      state.ThreeColors = payload;
    },
    actionFilters: (state, { payload }) => {
      state.filters = payload;
    },
    actionTwelveProducts: (state, { payload }) => {
      state.twelveProducts = payload;
    },
    actionTwelveFilterProducts: (state, { payload }) => {
      state.twelveFiltersProducts = payload;
    },
    actionPreviewProductData: (state, { payload }) => {
      state.previewProductInfo = payload;
    },
    actionLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const {
  actionProducts,
  actionOneProduct,
  actionThreeProducts,
  actionThreeColors,
  actionTwelveProducts,
  actionTwelveProductsbyCategory,
  actionTwelveProductsbyType,
  actionFilters,
  actionTwelveFilterProducts,
  actionSearch,
  actionPreviewProductData,
  actionYouSee,
  previewProductInfo,
  actionLoading,
} = productsSlice.actions;

export const actionGetProducts = () => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const response = await sendRequest(`${API_URL}/products`);

    if (response) {
      dispatch(actionProducts(response.data));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionGetOneProduct = (id) => async (dispatch) => {
  try {
    dispatch(actionLoading(true));
    const response = await sendRequest(`${API_URL}/products/${id}`);
    if (response) {
      dispatch(actionYouSee(response));
      dispatch(actionOneProduct(response));
      dispatch(actionPreviewProductData(response));
      return response;
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionLoading(false));
  }
};

export const actionLoadingTwelveProductsByCategory =
  (categories) => async (dispatch) => {
    try {
      dispatch(actionIsAnimation(true));
      const newProductbyCategory = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await sendRequest(
        `${API_URL}/products?${categories}&perPage=12`,
        "GET",
        newProductbyCategory
      );
      if (response) {
        dispatch(actionTwelveProductsbyCategory(response.data));
        return response.data;
      }
    } catch (error) {
      console.error("Сталася помилка під час виконання функції:", error);
    } finally {
      dispatch(actionIsAnimation(false));
    }
  };

export const actionLoadingTwelveProductsByType = (type) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const newProductbyType = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await sendRequest(
      `${API_URL}/products?${type}&perPage=12`,
      "GET",
      newProductbyType
    );
    if (response) {
      dispatch(actionTwelveProductsbyType(response.data));
      return response.data;
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionGetThreeProducts = (name) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const response = await sendRequest(`${API_URL}/products?name=${name}`);

    if (response) {
      dispatch(actionThreeProducts(response.data));
      return response;
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionGetThreeColors = (name) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const response = await sendRequest(`${API_URL}/products?name=${name}`);

    if (response) {
      dispatch(actionThreeColors(response.data));
      return response.data;
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionCreateNewProduct = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { product, token } = data;
    const newProduct = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(product),
    };
    const response = await sendRequest(
      `${API_URL}/products`,
      "POST",
      newProduct
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

export const actionChangeProduct = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { id, product, token } = data;
    const newProduct = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(product),
    };
    const response = await sendRequest(
      `${API_URL}/products/${id}`,
      "PUT",
      newProduct
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

export const actionSearchProducts = (query) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const newProduct = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    };
    const response = await sendRequest(
      `${API_URL}/products/search`,
      "POST",
      newProduct
    );
    if (response) {
      dispatch(actionSearch(response));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionFilterProducts = (parameters) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const response = await sendRequest(`${API_URL}/products?${parameters}`);
    if (response.data.length) {
      dispatch(actionFilters(response.data));
      dispatch(actionLoadFilter(false));
    } else {
      dispatch(actionLoadFilter(true));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionLoadingTwelveProducts = (page) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const newProduct = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await sendRequest(
      `${API_URL}/products?startPage=${page}&perPage=12`,
      "GET",
      newProduct
    );
    if (response) {
      dispatch(actionTwelveProducts(response.data));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};

export const actionLoadingFilterProducts = (data) => async (dispatch) => {
  const { parameters, page } = data;
  try {
    dispatch(actionIsAnimation(true));
    const newProduct = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await sendRequest(
      `${API_URL}/products?${parameters}&startPage=${page}&perPage=12`,
      "GET",
      newProduct
    );
    if (response) {
      dispatch(actionTwelveFilterProducts(response.data));
    }
  } catch (error) {
    console.error("Сталася помилка під час виконання функції:", error);
  } finally {
    dispatch(actionIsAnimation(false));
  }
};
export const actionDeleteProduct = (data) => async (dispatch) => {
  try {
    dispatch(actionIsAnimation(true));
    const { id, token } = data;
    const deleteProduct = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await sendRequest(
      `${API_URL}/products/${id}`,
      "DELETE",
      deleteProduct
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

export default productsSlice.reducer;
