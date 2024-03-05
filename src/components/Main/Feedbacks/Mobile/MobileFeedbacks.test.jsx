import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import MobileFeedbacks from "./MobileFeedbacks";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  SearchPage", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
        const initialState = {

        };

        const store = mockStore(initialState);
        const mobileFeedbacks = render(
            <Provider store={store}>
                <BrowserRouter>
                    <MobileFeedbacks />
                </BrowserRouter>
            </Provider>
        );

        expect(mobileFeedbacks).toMatchSnapshot();
    });
});
