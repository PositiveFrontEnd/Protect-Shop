import React from "react";
import { render } from "@testing-library/react";
import SearchSort from "./SearchSort";
import { BrowserRouter } from "react-router-dom";
describe("Тестування компонента  SearchSort", () => {
    test("Знімок", () => {

        const data = {
            handleSort: () => console.log(),
            sort: 'highToLow'
        }

        const shopsPage = render(
            <BrowserRouter>
                <SearchSort data={data} />
            </BrowserRouter>
        );
        expect(shopsPage).toMatchSnapshot();
    });
});
