import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import AboutUsPage from "./AboutUsPage";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  AboutUsPage", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {};
        const store = mockStore(initialState);
        const aboutUsPage = render(
            <Provider store={store}>
                <BrowserRouter>
                    <AboutUsPage />
                </BrowserRouter>
            </Provider>
        );

        expect(aboutUsPage).toMatchSnapshot();
    });
});
