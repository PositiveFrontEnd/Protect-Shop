import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import Feedbacks from "./Feedbacks";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  Feedbacks", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
        const initialState = {

        };

        const store = mockStore(initialState);
        const feedbacks = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Feedbacks />
                </BrowserRouter>
            </Provider>
        );

        expect(feedbacks).toMatchSnapshot();
    });
});
