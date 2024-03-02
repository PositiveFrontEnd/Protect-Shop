import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import HeaderMenu from "./HeaderMenu";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  HeaderMenu", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
        const initialState = {
            user: {
                token: "token",
                registrationModal: false,
                authorizationStatus: null,
                registrationStatus: "some text",
                registrationData: {},
                correctData: "some text",
                isAdmin: false,
            },
        };

        const store = mockStore(initialState);
        const headerMenu = render(
            <Provider store={store}>
                <BrowserRouter>
                    <HeaderMenu />
                </BrowserRouter>
            </Provider>
        );

        expect(headerMenu).toMatchSnapshot();
    });
});
