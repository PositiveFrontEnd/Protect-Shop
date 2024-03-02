import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import BlogPage from "./BlogPage";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  BlogPage", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {};

        const store = mockStore(initialState);


        const blogPage = render(
            <Provider store={store}>
                <BrowserRouter>
                    <BlogPage />
                </BrowserRouter>
            </Provider>
        );

        expect(blogPage).toMatchSnapshot();
    });
});
