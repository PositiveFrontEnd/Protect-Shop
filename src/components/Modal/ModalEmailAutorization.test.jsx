import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ModalEmailAutorization from "./ModalEmailAutorization";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  ModalEmailAutorization", () => {
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
        const modalEmailAutorization = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalEmailAutorization data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(modalEmailAutorization).toMatchSnapshot();
    });
});