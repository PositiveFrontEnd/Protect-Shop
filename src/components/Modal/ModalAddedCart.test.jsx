import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ModalAddedCart from "./ModalAddedCart";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  ModalAddedCart", () => {
  test("Знімок", () => {
    const mockStore = configureStore([thunk]);
    const initialState = {};

    const data = {
      price: 2134,
      onclick: () => {},
      isOpen: () => {},
      secondaryClick: () => {},
      firstClick: () => {},
    };

    const store = mockStore(initialState);
    const modalAddedCart = render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalAddedCart data={data} />
        </BrowserRouter>
      </Provider>
    );

    expect(modalAddedCart).toMatchSnapshot();
  });
});
