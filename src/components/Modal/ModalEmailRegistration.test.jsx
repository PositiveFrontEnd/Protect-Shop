import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ModalEmailRegistration from "./ModalEmailRegistration";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  ModalEmailRegistration", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {

        };
        const data = {
            price: 2134,
            onclick: () => { },
            isOpen: () => { },
        };
        const store = mockStore(initialState);
        const modalEmailRegistration = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalEmailRegistration data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(modalEmailRegistration).toMatchSnapshot();
    });
});