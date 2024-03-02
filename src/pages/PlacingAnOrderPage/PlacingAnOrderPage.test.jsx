import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import PlacingAnOrderPage from "./PlacingAnOrderPage";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  PlacingAnOrderPage", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
        const initialState = {

        };

        const store = mockStore(initialState);
        const placingAnOrderPage = render(
            <Provider store={store}>
                <BrowserRouter>
                    <PlacingAnOrderPage />
                </BrowserRouter>
            </Provider>
        );

        expect(placingAnOrderPage).toMatchSnapshot();
    });
});
