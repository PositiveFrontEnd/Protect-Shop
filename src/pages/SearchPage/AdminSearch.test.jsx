import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import AdminSearch from "./AdminSearch";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { ContextFunctions } from "../../context/context";
describe("Тестування компонента  AdminSearch", () => {
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
                    letterSubject: "Thank you for order!"
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
            }

        };
        const contextValues = {
            isModalAll: true,
            modalChangeAll: true,
        };

        const store = mockStore(initialState);
        const adminSearch = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ContextFunctions.Provider value={contextValues}>
                        <AdminSearch />
                    </ContextFunctions.Provider>
                </BrowserRouter>
            </Provider>
        );

        expect(adminSearch).toMatchSnapshot();
    });
});
