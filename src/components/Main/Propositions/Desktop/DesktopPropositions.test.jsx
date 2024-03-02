import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import DesktopPropositions from "./DesktopPropositions";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  DesktopPropositions", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {
        };

        const store = mockStore(initialState);



        const desktopPropositions = render(
            <Provider store={store}>
                <BrowserRouter>
                    <DesktopPropositions />
                </BrowserRouter>
            </Provider>
        );

        expect(desktopPropositions).toMatchSnapshot();
    });
});
