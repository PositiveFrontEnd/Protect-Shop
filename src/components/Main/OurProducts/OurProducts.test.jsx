import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import OurProducts from "./OurProducts";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  OurProducts", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {

        };

        const store = mockStore(initialState);

        const ourProducts = render(
            <Provider store={store}>
                <BrowserRouter>
                    <OurProducts />
                </BrowserRouter>
            </Provider>
        );

        expect(ourProducts).toMatchSnapshot();
    });
});
