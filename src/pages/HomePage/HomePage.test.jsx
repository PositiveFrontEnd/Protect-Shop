import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ContextFunctions } from "../../context/context";
describe("Тестування компонента  HomePage", () => {
    test("Знімок", () => {
        const mockStore = configureStore([thunk]);
        const initialState = {
            home: {
                isAnimation: false,
                inputText: "",
                filterHomePage: [],
                marker: null,
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
                letterAll: [],
                importantLetters: []
            },
            shopComments: {
                createShopComment: [],
                getShopComments: [],
            },
        };

        const contextValues = {
            isModalAll: true,
            modalChangeAll: true,
        };

        const store = mockStore(initialState);

        const homePage = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ContextFunctions.Provider value={contextValues}>
                        <HomePage />
                    </ContextFunctions.Provider>
                </BrowserRouter>
            </Provider>
        );

        expect(homePage).toMatchSnapshot();
    });
});
