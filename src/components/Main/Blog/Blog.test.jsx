import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Blog from "./Blog";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  Blog", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {

        };

        const store = mockStore(initialState);
        const blog = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Blog />
                </BrowserRouter>
            </Provider>
        );

        expect(blog).toMatchSnapshot();
    });
});
