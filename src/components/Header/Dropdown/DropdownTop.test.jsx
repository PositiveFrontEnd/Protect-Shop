import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import DropdownTop from "./DropdownTop";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  DropdownTop", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
        const initialState = {
        };
        const click = () => console.log("some text")

        const store = mockStore(initialState);
        const dropdownTop = render(
            <Provider store={store}>
                <BrowserRouter>
                    <DropdownTop click={click} />
                </BrowserRouter>
            </Provider>
        );

        expect(dropdownTop).toMatchSnapshot();
    });
});
