import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ModalForm from "./ModalForm";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  ModalForm", () => {
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
        const modalForm = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalForm data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(modalForm).toMatchSnapshot();
    });
});