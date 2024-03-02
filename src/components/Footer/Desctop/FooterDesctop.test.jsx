import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import FooterDesctop from "./FooterDesctop";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  FooterDesctop", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {
        };

        const store = mockStore(initialState);

        const footerDesctop = render(
            <Provider store={store}>
                <BrowserRouter>
                    <FooterDesctop />
                </BrowserRouter>
            </Provider>
        );

        expect(footerDesctop).toMatchSnapshot();
    });
});
