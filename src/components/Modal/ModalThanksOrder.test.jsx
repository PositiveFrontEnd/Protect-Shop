import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ModalThanksOrder from "./ModalThanksOrder";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  ModalThanksOrder", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {
            user: {
                token: "token",
                registrationModal: false,
                authorizationStatus: null,
                registrationStatus: "some text",
                registrationData: {},
                correctData: "some text",
                isAdmin: false,
            }, products: {
                products: [],
                productsByCategory: [],
                productsByType: [],
                oneProduct: {},
                ThreeProducts: [],
                ThreeColors: [],
                filters: [],
                twelveProducts: [],
                filtersParameters: {},
                twelveFiltersProducts: [],
                searchProducts: [],
                youSee: [],
                previewProductInfo: {},
            },
        };
        const data = {
            onclick: () => { },
            isOpen: () => { },
            secondaryClick: () => { },
            firstClick: () => { },
        };
        const store = mockStore(initialState);
        const modalThanksOrder = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalThanksOrder data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(modalThanksOrder).toMatchSnapshot();
    });
});