import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ForgotPasswordPage from "./ForgotPasswordPage";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  ForgotPasswordPage", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {

        };

        const store = mockStore(initialState);


        const forgotPasswordPage = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ForgotPasswordPage />
                </BrowserRouter>
            </Provider>
        );

        expect(forgotPasswordPage).toMatchSnapshot();
    });
});
