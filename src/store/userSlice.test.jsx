import React from "react";
import userSlice, {
    actionToken,
    actionUserRegistrationData,
    actionModalAfterRegistration,
    actionErrorStatus,
    actionRegistrationStatus,
    actionCorrectData,
    actionIsAdmin,
} from "./userSlice";

describe("test userReducers", () => {
    test(" action", () => {
        expect(userSlice(undefined, { type: undefined })).toEqual({
            token: null,
            registrationModal: false,
            authorizationStatus: null,
            registrationStatus: "",
            registrationData: {},
            correctData: "",
            isAdmin: false,
        });
    });

    test("actionToken", () => {
        const initialState = {
            token: "",
        };
        const previsionState = initialState;
        expect(
            userSlice(previsionState, actionToken("kjhfaksjajks"))
        ).toEqual({
            ...initialState,
            token: "kjhfaksjajks",
        });
    });
    test("actionUserRegistrationData", () => {
        const initialState = {
            registrationData: {},
        };
        const previsionState = initialState;
        expect(
            userSlice(
                previsionState,
                actionUserRegistrationData({ someInfo: "sdfsdfs", someInfo2: "asdasd" })
            )
        ).toEqual({
            registrationData: { someInfo: "sdfsdfs", someInfo2: "asdasd" },
        });
    });

    test("actionModalAfterRegistration", () => {
        const initialState = {
            registrationModal: false,
        };
        const previsionState = initialState;
        expect(userSlice(previsionState, actionModalAfterRegistration(true))).toEqual({
            registrationModal: true,
        });
    });

    test("actionErrorStatus", () => {
        const initialState = {
            authorizationStatus: null,
        };
        const previsionState = initialState;
        expect(userSlice(previsionState, actionErrorStatus("ssdfdsfsdsd"))).toEqual({
            authorizationStatus: "ssdfdsfsdsd",
        });
    });
    test("actionRegistrationStatus", () => {
        const initialState = {
            registrationStatus: "",
        };
        const previsionState = initialState;
        expect(userSlice(previsionState, actionRegistrationStatus(true))).toEqual({
            registrationStatus: true
        });
    });

    test("actionCorrectData", () => {
        const initialState = {
            correctData: "",
        };
        const previsionState = initialState;
        expect(userSlice(previsionState, actionCorrectData("hello"))).toEqual({
            correctData: "hello",
        });
    });
    test("actionIsAdmin", () => {
        const initialState = {
            isAdmin: false,
        };
        const previsionState = initialState;
        expect(userSlice(previsionState, actionIsAdmin(true))).toEqual({
            isAdmin: true,
        });
    });

});
