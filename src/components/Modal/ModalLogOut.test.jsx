import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ModalLogOut from "./ModalLogOut";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  ModalLogOut", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {

        };
        const data = {
            onclick: () => { },
            isOpen: () => { },
            secondaryClick: () => { },
            firstClick: () => { },
        };
        const store = mockStore(initialState);
        const modalLogOut = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalLogOut data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(modalLogOut).toMatchSnapshot();
    });
});