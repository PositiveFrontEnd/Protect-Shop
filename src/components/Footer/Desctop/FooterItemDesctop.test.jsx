import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import FooterItemDesctop from "./FooterItemDesctop";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  FooterItemDesctop", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {
        };

        const store = mockStore(initialState);
        const data = {
            title: "some title",
            children: "some chuldren",
            className: "some__className"
        }
        const footerItemDesctop = render(
            <Provider store={store}>
                <BrowserRouter>
                    <FooterItemDesctop data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(footerItemDesctop).toMatchSnapshot();
    });
});
