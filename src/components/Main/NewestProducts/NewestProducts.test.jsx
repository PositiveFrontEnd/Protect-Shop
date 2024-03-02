import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import NewestProducts from "./NewestProducts";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  NewestProducts", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {

        };

        const store = mockStore(initialState);

        const newestProducts = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewestProducts />
                </BrowserRouter>
            </Provider>
        );

        expect(newestProducts).toMatchSnapshot();
    });
});
