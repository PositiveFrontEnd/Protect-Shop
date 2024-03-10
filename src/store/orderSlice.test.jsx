import React from "react";
import orderSlice, {
    actionAddOrder,
    actionProductsOrderForGuest,
    actionInfoOrderForGuest,
    actionUpDateForm,
    actionPromocodePrice,
    actionClearPromoCode,
    actionUpDateFormGuest,
} from "./orderSlice";

describe("test orderSlice", () => {
    test(" action", () => {
        expect(orderSlice(undefined, { type: undefined })).toEqual({
            orderState: [],
            productsForOrderGuest: JSON.parse(
                localStorage.getItem("productsForOrderGuest") || "{}"
            ),
            infoForOrderGuest: JSON.parse(
                localStorage.getItem("productsForOrderGuest") || "[]"
            ),
            deliveryForOrderGuest: JSON.parse(
                localStorage.getItem("deliveryForOrderGuest") || "{}"
            ),
            order: {
                letterSubject: "Thank you for order!",
            },
            promoCodePrice: "",

            orderGuest: {
                letterSubject: "Thank you for order!",
            },
        });
    });

    test("actionAddOrder", () => {
        const initialState = {
            orderState: []
        };
        const previsionState = initialState;
        expect(
            orderSlice(previsionState, actionAddOrder([{ prod: {} }, { info: {} }, { quantity: {} }]))
        ).toEqual({
            ...initialState,
            orderState: [{ prod: {} }, { info: {} }, { quantity: {} }]
        });
    });
    test("actionProductsOrderForGuest", () => {
        const initialState = {
            productsForOrderGuest: {},
        };
        const previsionState = initialState;
        expect(
            orderSlice(
                previsionState,
                actionProductsOrderForGuest({ someInfo: "sdfsdfs", someInfo2: "asdasd" })
            )
        ).toEqual({
            productsForOrderGuest: { someInfo: "sdfsdfs", someInfo2: "asdasd" },
        });
    });

    test("actionInfoOrderForGuest", () => {
        const initialState = {
            infoForOrderGuest: [],
        };
        const previsionState = initialState;
        expect(orderSlice(previsionState,
            actionInfoOrderForGuest([{ someInfo: "some info" }, { someInfo2: "info" }]))).toEqual({
                infoForOrderGuest: [{ someInfo: "some info" }, { someInfo2: "info" }],
            });
    });

    test("actionUpDateForm", () => {
        const initialState = {
            order: {
                letterSubject: "Thank you for order! You are welcome!",
            },
        };
        const previsionState = initialState;
        const newOrder = {
            customerId: "5d99ce196d40fb1b747bc5f5",
            deliveryAddress: {
                country: "Ukraine",
                city: "Kiev",
                address: "Kreshchatic Street 56//A",
                postal: "01044"
            },
            shipping: "Kiev 50UAH",
            paymentInfo: "Credit card",
            status: "not shipped",
            email: "saribeg@gmail.com",
            mobile: "+380630000000",
            letterHtml:
                "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>"
        };


        expect(orderSlice(previsionState, actionUpDateForm(newOrder))).toEqual({
            order: {
                customerId: "5d99ce196d40fb1b747bc5f5",
                deliveryAddress: {
                    country: "Ukraine",
                    city: "Kiev",
                    address: "Kreshchatic Street 56//A",
                    postal: "01044"
                },
                shipping: "Kiev 50UAH",
                paymentInfo: "Credit card",
                status: "not shipped",
                email: "saribeg@gmail.com",
                mobile: "+380630000000",
                letterSubject: "Thank you for order! You are welcome!",
                letterHtml:
                    "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>"
            },
        });
    });
    test("actionPromocodePrice", () => {
        const initialState = {
            promoCodePrice: "",
        };
        const previsionState = initialState;
        expect(orderSlice(previsionState, actionPromocodePrice("protect24"))).toEqual({
            promoCodePrice: "protect24",
        });
    });

    test("actionClearPromoCode", () => {
        const initialState = {
            promoCodePrice: "protect24",
        };
        const previsionState = initialState;
        expect(orderSlice(previsionState, actionClearPromoCode())).toEqual({
            promoCodePrice: "",
        });
    });
    test("actionUpDateFormGuest", () => {
        const initialState = {
            orderGuest: {

            },
        };

        const newOrder = {
            customerId: "5d99ce196d40fb1b747bc5f5",
            deliveryAddress: {
                country: "Ukraine",
                city: "Kiev",
                address: "Kreshchatic Street 56//A",
                postal: "01044"
            },
            shipping: "Kiev 50UAH",
            paymentInfo: "Credit card",
            status: "not shipped",
            email: "saribeg@gmail.com",
            mobile: "+380630000000",
            letterSubject: "Thank you for order!",
            letterHtml:
                "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>"
        };
        const previsionState = initialState;
        expect(orderSlice(previsionState, actionUpDateFormGuest(newOrder))).toEqual({
            orderGuest: {
                customerId: "5d99ce196d40fb1b747bc5f5",
                deliveryAddress: {
                    country: "Ukraine",
                    city: "Kiev",
                    address: "Kreshchatic Street 56//A",
                    postal: "01044"
                },
                shipping: "Kiev 50UAH",
                paymentInfo: "Credit card",
                status: "not shipped",
                email: "saribeg@gmail.com",
                mobile: "+380630000000",
                letterSubject: "Thank you for order!",
                letterHtml:
                    "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>"
            },
        });
    });

});
