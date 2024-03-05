import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import DesktopFeedbacks from "./DesktopFeedbacks";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  DesktopFeedbacks", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
        const initialState = {

        };

        const store = mockStore(initialState);
        const desktopFeedbacks = render(
            <Provider store={store}>
                <BrowserRouter>
                    <DesktopFeedbacks />
                </BrowserRouter>
            </Provider>
        );

        expect(desktopFeedbacks).toMatchSnapshot();
    });
});
