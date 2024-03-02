import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import ModalClose from "./ModalClose";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
describe("test Modal", () => {
    test("render Modal", () => {
        const mockStore = configureStore();
        const initialState = {

        }
        const handelClick = () => console.log("hello");
        const store = mockStore(initialState);
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalClose onClick={handelClick} />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});