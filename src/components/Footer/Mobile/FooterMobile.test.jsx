import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import FooterMobile from "./FooterMobile";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  FooterMobile", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
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

        const store = mockStore(initialState);

        const footerMobile = render(
            <Provider store={store}>
                <BrowserRouter>
                    <FooterMobile />
                </BrowserRouter>
            </Provider>
        );

        expect(footerMobile).toMatchSnapshot();
    });
});
