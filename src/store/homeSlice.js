import React from "react";
import {createSlice} from "@reduxjs/toolkit";
import {API_URL} from "../components/Helpers/Api/Api";
import sendRequest from "../components/Helpers/SendRequest/sendRequest";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        isAnimation: false,
        inputText: "",
        filterHomePage: [],
        marker: null,
    },
    reducers: {
        actionIsAnimation: (state, {payload}) => {
            state.isAnimation = payload;
        },
        actionInputText: (state, action) => {
            state.inputText = action.payload;
        },
        actionFiltersHomePage: (state, {payload}) => {
            state.filterHomePage = payload;
        }
    },
});

export const {actionIsAnimation, actionInputText, actionFiltersHomePage} =
    homeSlice.actions;
export const actionPostPage = (data) => async (dispatch) => {
    try {
        dispatch(actionIsAnimation(true));
        const {token, order} = data;
        const createRequest = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },
            body: JSON.stringify(order),
        };
        const response = await sendRequest(
            `${API_URL}/orders`,
            "POST",
            createRequest
        );
        if (response) {
            console.log("Page", response);
        }
    } catch (error) {
        console.error("Сталася помилка під час виконання функції:", error);
    } finally {
        dispatch(actionIsAnimation(false));
    }
};
export const actionFilterHomeProducts = (parameters) => async (dispatch) => {
    try {
        dispatch(actionIsAnimation(true));
        const response = await sendRequest(`${API_URL}/products?${parameters}`);
        if (response) {
            return dispatch(actionFiltersHomePage(response.data));
        }
    } catch (error) {
        console.error("Сталася помилка під час виконання функції:", error);
    } finally {
        dispatch(actionIsAnimation(false));
    }
};
export default homeSlice.reducer;
