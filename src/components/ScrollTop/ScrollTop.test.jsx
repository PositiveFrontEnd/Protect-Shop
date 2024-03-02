import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ScrollTop from "./ScrollTop";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  ScrollTop", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {
        };

        const store = mockStore(initialState);



        const scrollTop = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollTop />
                </BrowserRouter>
            </Provider>
        );

        expect(scrollTop).toMatchSnapshot();
    });
});
