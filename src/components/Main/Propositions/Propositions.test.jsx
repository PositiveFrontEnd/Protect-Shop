import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Propositions from "./Propositions";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  Propositions", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {

        };

        const store = mockStore(initialState);

        const propositions = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Propositions />
                </BrowserRouter>
            </Provider>
        );

        expect(propositions).toMatchSnapshot();
    });
});
