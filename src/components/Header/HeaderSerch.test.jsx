import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import HeaderSearch from "./HeaderSearch";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  HeaderSearch", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
        const initialState = {
            home: {
                isAnimation: false,
                inputText: "some text",
                filterHomePage: [],
            },
        };

        const store = mockStore(initialState);
        const headerSearch = render(
            <Provider store={store}>
                <BrowserRouter>
                    <HeaderSearch />
                </BrowserRouter>
            </Provider>
        );

        expect(headerSearch).toMatchSnapshot();
    });
});
