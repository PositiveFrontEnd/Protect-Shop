import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import PopularCard from "./PopularCard";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Тестування компонента  PopularCard", () => {
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

        const data = {
            src: "https://chat.openai.com/c/1b5f68e3-34af-4692-b7d7-e8e275a497ad",
            name: "name",
            price: 1234,
            handleFavorite: () => console.log("hello"),
            click: () => console.log("hello"),
            id: "123765823523987295"
        };

        const popularCard = render(
            <Provider store={store}>
                <BrowserRouter>
                    <PopularCard data={data} />
                </BrowserRouter>
            </Provider>
        );

        expect(popularCard).toMatchSnapshot();
    });
});
