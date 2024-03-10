import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import DesktopCard from "./desktopCard";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Тестування компонента  desktopCard", () => {
    test("Знімок", () => {
        const mockStore = configureStore();
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
        const data = {
            avatar: "https://anybag.ua/upload/resize_cache/iblock/c36/450_450_140cd750bba9870f18aada2478b24840a/f439vexpgnfug8w4syc2marwqqde4u3q.jpeg",
            name: "some",
            comment: "some",
            likes: 1,
            background: "string"
        }

        const store = mockStore(initialState);
        const desktopCard = render(
            <Provider store={store}>
                <BrowserRouter>
                    <DesktopCard data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(desktopCard).toMatchSnapshot();
    });
});
