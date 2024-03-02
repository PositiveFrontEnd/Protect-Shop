import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Dropdown from "./Dropdown";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  DropdownTop", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
        const initialState = {
            home: {
                isAnimation: false,
                inputText: "some text",
                filterHomePage: [],
            },
            user: {
                token: "token",
                registrationModal: false,
                authorizationStatus: null,
                registrationStatus: "some text",
                registrationData: {},
                correctData: "some text",
                isAdmin: false,
            },
            products: {
                products: [],
                productsByCategory: [],
                productsByType: [],
                oneProduct: {},
                ThreeProducts: [],
                ThreeColors: [],
                filters: [],
                twelveProducts: [],
                filtersParameters: {},
                twelveFiltersProducts: [],
                searchProducts: [],
                youSee: [],
                previewProductInfo: {},
            },
            order: {
                orderState: [],
                productsForOrderGuest: {},
                infoForOrderGuest: [],
                deliveryForOrderGuest: {},
                order: {
                    letterSubject: "Thank you for order!",
                },
                promoCodePrice: "",
                orderGuest: { letterSubject: "Thank you for order!" },
            },
            basket: {
                basket: [],
                priceGuest: "''",
                guestBasket: {},
            },
            catalogue: {
                sortCatalogue: "some text",
                loadFilter: false,
            },
            favorite: {
                favorite: [],
                favoriteForCustomer: [],
                guestFavorite: [],
            },
            message: {
                letters: [],
            },
        };
        const data = {
            isModal: true,
            modalChange: () => console.log("hello"),
            actionDropdown: () => console.log("hello"),
        };

        const store = mockStore(initialState);
        const dropdown = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Dropdown data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(dropdown).toMatchSnapshot();
    });
});
