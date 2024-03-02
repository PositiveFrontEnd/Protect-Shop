import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import ModalWrapper from "./ModalWrapper";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
describe("test Modal", () => {
    test("render Modal", () => {
        const mockStore = configureStore();
        const initialState = {
        }
        const data = {

            children: " some text",
            isOpen: () => console.log("hello")
        }
        const store = mockStore(initialState);
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalWrapper data={data} />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});