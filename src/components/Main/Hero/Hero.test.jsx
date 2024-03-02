import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Hero from "./Hero";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  Hero", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {

        };

        const store = mockStore(initialState);



        const hero = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Hero />
                </BrowserRouter>
            </Provider>
        );

        expect(hero).toMatchSnapshot();
    });
});
