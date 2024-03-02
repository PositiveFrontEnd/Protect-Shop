import React from "react";
import { render } from "@testing-library/react";
import NotPage from "./NotPage";
import { BrowserRouter } from "react-router-dom";
describe("Тестування компонента NotPage", () => {
    test("Знімок", () => {
        const notPage = render(
            <BrowserRouter>
                <NotPage />
            </BrowserRouter>
        );
        expect(notPage).toMatchSnapshot();
    });
});
