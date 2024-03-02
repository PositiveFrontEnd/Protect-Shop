import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ModalAddToBasket from "./ModalAddToBasket";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  ModalAddToBasket", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {

        };

        const store = mockStore(initialState);
        const modalAddToBasket = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalAddToBasket isOpen={true} />
                </BrowserRouter>
            </Provider>
        );

        expect(modalAddToBasket).toMatchSnapshot();
    });
});
