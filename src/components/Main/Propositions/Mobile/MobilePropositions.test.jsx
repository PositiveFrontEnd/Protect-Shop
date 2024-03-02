import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import MobilePropositions from "./MobilePropositions";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  MobilePropositions", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {
        };

        const store = mockStore(initialState);



        const mobilePropositions = render(
            <Provider store={store}>
                <BrowserRouter>
                    <MobilePropositions />
                </BrowserRouter>
            </Provider>
        );

        expect(mobilePropositions).toMatchSnapshot();
    });
});
