import React from "react";
import { render } from "@testing-library/react";
import ShopsPage from "./ShopsDnipro";
import { BrowserRouter } from "react-router-dom";
describe("Тестування компонента ShopsPage", () => {
    test("Знімок", () => {
        const shopsPage = render(
            <BrowserRouter>
                <ShopsPage />
            </BrowserRouter>
        );
        expect(shopsPage).toMatchSnapshot();
    });
});
