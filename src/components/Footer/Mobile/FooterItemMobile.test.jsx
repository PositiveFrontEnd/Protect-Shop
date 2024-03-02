import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import FooterItemMobile from "./FooterItemMobile";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  FooterItemMobile", () => {
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
        const footerItemMobile = render(
            <Provider store={store}>
                <BrowserRouter>
                    <FooterItemMobile data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(footerItemMobile).toMatchSnapshot();
    });
});
