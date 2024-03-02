import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import FavoritesCard from "./FavoritesCard";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  FavoritesCard", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {

        };

        const store = mockStore(initialState);

        const data = {
            url: "https://chat.openai.com/c/d323d740-b8b7-417d-a832-84a6fe524b53",
            name: "some name",
            price: 1234
        };

        const favoritesCard = render(
            <Provider store={store}>
                <BrowserRouter>
                    <FavoritesCard data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(favoritesCard).toMatchSnapshot();
    });
});
