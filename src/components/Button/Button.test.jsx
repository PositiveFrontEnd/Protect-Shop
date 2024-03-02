import React from "react";
import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
const handelClick = vi.fn();


describe("test button", () => {
    test("isButton", () => {
        render(<Button>text</Button>);
        expect(screen.getByText("text")).toBeInTheDocument();
    });
    test("isClassName", () => {
        render(<Button className={"btn_primari"}>text</Button>);
        expect(screen.getByText("text")).toHaveClass("btn_primari");
    });
    test("isType", () => {
        render(<Button>text</Button>);
        expect(screen.getByText("text")).toHaveAttribute("type", "button");
    });

    test("isCheng", () => {
        render(<Button type={"submit"}>text</Button>);
        expect(screen.getByText("text")).toHaveAttribute("type", "submit");
    });

    test("isLink", () => {
        render(<Button href={"/link"}>text</Button>);
        expect(screen.getByText("text")).toHaveAttribute("href", "/link");
    });

    test("isfunction", () => {
        render(<Button onClick={handelClick}>text</Button>);
        const button = screen.getByText("text");
        fireEvent.click(button);
        expect(handelClick).toHaveBeenCalled();
    });
});
