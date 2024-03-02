import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import ModalBody from "./ModalBody";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
describe("test Modal", () => {
    test("render Modal", () => {
        const mockStore = configureStore();
        const initialState = {

        }
        const children = "some text"
        const store = mockStore(initialState);
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalBody children={children} />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});