import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ModalThankRegistration from "./ModalThankRegistration";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  ModalThankRegistration", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {
            home: {
                isAnimation: false,
                inputText: "some text",
                filterHomePage: [],
            }, user: {
                token: "token",
                registrationModal: false,
                authorizationStatus: null,
                registrationStatus: "some text",
                registrationData: {},
                correctData: "some text",
                isAdmin: false,
            },
        };
        const data = {
            onclick: () => { },
        };
        const store = mockStore(initialState);
        const modalThankRegistration = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalThankRegistration data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(modalThankRegistration).toMatchSnapshot();
    });
});