import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import DropdownWrapper from "./DropdownWrapper";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  DropdownWrapper", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
        const initialState = {
        };
        const data = {
            click: () => console.log("some text"),
            children: "some text"


        }
        const store = mockStore(initialState);
        const dropdownWrapper = render(
            <Provider store={store}>
                <BrowserRouter>
                    <DropdownWrapper data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(dropdownWrapper).toMatchSnapshot();
    });
});
