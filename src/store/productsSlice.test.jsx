import React from "react";
import productsSlice, {
    actionProducts,
    actionOneProduct,
    actionThreeProducts,
    actionThreeColors,
    actionTwelveProducts,
    actionTwelveProductsbyCategory,
    actionTwelveProductsbyType,
    actionFilters,
    actionFiltersParameters,
    actionTwelveFilterProducts,
    actionSearch,
    actionPreviewProductData,
    actionYouSee,
} from "./productsSlice";

describe("test productsSlice", () => {
    test(" action", () => {
        expect(productsSlice(undefined, { type: undefined })).toEqual({
            products: [],
            productsByCategory: [],
            productsByType: [],
            oneProduct: {},
            ThreeProducts: JSON.parse(localStorage.getItem("Threeproducts") || "[]"),
            ThreeColors: [],
            filters: [],
            twelveProducts: [],
            twelveFiltersProducts: [],
            searchProducts: [],
            youSee: [],
            previewProductInfo: {},
            previewProductInfo: {},
            isLoading: false,
        });
    });

    test("actionProducts", () => {
        const initialState = {
            products: [],
        };
        const previsionState = initialState;
        expect(
            productsSlice(previsionState, actionProducts([{ prod: {} }, { info: {} }, { quantity: {} }]))
        ).toEqual({
            ...initialState,
            products: [{ prod: {} }, { info: {} }, { quantity: {} }],
        });
    });
    test("actionYouSee", () => {
        const initialState = {
            youSee: [{ prod: {} }, { info: {} }, { quantity: {} },],
        };
        const previsionState = initialState;
        expect(
            productsSlice(
                previsionState,
                actionYouSee({ prod: {} })
            )
        ).toEqual({
            youSee: [{ prod: {} }, { info: {} }, { quantity: {} }]
        });
    });

    test("actionTwelveProductsbyCategory", () => {
        const initialState = {
            productsByCategory: [],
        };
        const previsionState = initialState;
        expect(productsSlice(previsionState,
            actionTwelveProductsbyCategory([{ someInfo: "some info" }, { someInfo2: "info" }]))).toEqual({
                productsByCategory: [{ someInfo: "some info" }, { someInfo2: "info" }],
            });
    });

    test("actionTwelveProductsbyType", () => {
        const initialState = {
            productsByType: [],
        };
        const previsionState = initialState;

        expect(productsSlice(previsionState, actionTwelveProductsbyType([{ someInfo: "some info" }, { someInfo2: "info" }]))).toEqual({
            productsByType: [{ someInfo: "some info" }, { someInfo2: "info" }],
        });
    });
    test("actionSearch", () => {
        const initialState = {
            searchProducts: [],
        };
        const previsionState = initialState;
        expect(productsSlice(previsionState, actionSearch([{ someInfo: "some info" }, { someInfo2: "info" }]))).toEqual({
            searchProducts: [{ someInfo: "some info" }, { someInfo2: "info" }],
        });
    });

    test("actionOneProduct", () => {
        const initialState = {
            oneProduct: {},
        };
        const previsionState = initialState;
        expect(productsSlice(previsionState, actionOneProduct({ someInfo: "some info", someInfo2: "info" }))).toEqual({
            oneProduct: { someInfo: "some info", someInfo2: "info" }
        });
    });
    test("actionThreeProducts", () => {
        const initialState = {
            ThreeProducts: [],
        };
        const previsionState = initialState;
        const data = [
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" }
        ]
        expect(productsSlice(previsionState, actionThreeProducts(data))).toEqual({
            ThreeProducts: [
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" }
            ]
        });
    });
    test("actionThreeColors", () => {
        const initialState = {
            ThreeColors: [],
        };
        const previsionState = initialState;
        const data = [
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" }
        ]
        expect(productsSlice(previsionState, actionThreeColors(data))).toEqual({
            ThreeColors: [
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" }
            ]
        });
    });
    test("actionFilters", () => {
        const initialState = {
            filters: [{ some: "fsdfsd" },
            { some: "fsdfsd" },
            ],
        };
        const previsionState = initialState;
        const data = [
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" }
        ]
        expect(productsSlice(previsionState, actionFilters(data))).toEqual({
            filters: [
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" }
            ]
        });
    });
    test("actionTwelveProducts", () => {
        const initialState = {
            twelveProducts: [],
        };
        const previsionState = initialState;
        const data = [
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" }
        ]
        expect(productsSlice(previsionState, actionTwelveProducts(data))).toEqual({
            twelveProducts: [
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" }
            ]
        });
    });
    test("actionTwelveFilterProducts", () => {
        const initialState = {
            twelveFiltersProducts: [],
        };
        const previsionState = initialState;
        const data = [
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" },
            { someinfo: "fsdfsd" }
        ]
        expect(productsSlice(previsionState, actionTwelveFilterProducts(data))).toEqual({
            twelveFiltersProducts: [
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" },
                { someinfo: "fsdfsd" }
            ]
        });
    });
    test("actionPreviewProductData", () => {
        const initialState = {
            previewProductInfo: {},
        };
        const previsionState = initialState;
        expect(productsSlice(previsionState, actionPreviewProductData({ someInfo: "some info", someInfo2: "info" }))).toEqual({
            previewProductInfo: { someInfo: "some info", someInfo2: "info" }
        });
    });

});


