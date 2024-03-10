import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import UserAvatar from "./UserAvatar";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  UserAvatar", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
        const initialState = {
        };
        const data = {
            avatarUrl: "https://anybag.ua/upload/resize_cache/iblock/c36/450_450_140cd750bba9870f18aada2478b24840a/f439vexpgnfug8w4syc2marwqqde4u3q.jpeg",
            firstName: "some",
            background: "string",
            mobile: true,
        }

        const store = mockStore(initialState);
        const userAvatar = render(
            <Provider store={store}>
                <BrowserRouter>
                    <UserAvatar data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(userAvatar).toMatchSnapshot();
    });
});
