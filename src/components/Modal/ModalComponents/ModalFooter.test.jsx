import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import ModalFooter from "./ModalFooter";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
describe("test Modal", () => {
    test("render Modal", () => {
        const mockStore = configureStore();
        const initialState = {
        }
        const data = {
            className: "some__className",
            firstText: "text one",
            firstClassName: "className__first",
            secondaryClassName: "className__secondary",
            secondaryText: "text secondary",
            firstClick: () => console.log("hello first"),
            secondaryClick: () => console.log("hello secondary")
        }

        const store = mockStore(initialState);
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalFooter data={data} />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});