import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppHeader from "../AppComponent/AppHeader";
import { render } from "../utils/CustomRnder"

describe("page not found", () => {
    beforeEach(() => {
        render(<AppHeader />);

    })

    it("If Link is present and href is /", () => {
        const pageNotFoundTest1 = screen.getByRole("link", {
            name: "New Cars",
        });

        expect(pageNotFoundTest1).toBeInTheDocument();

    })
    it("If Link is present and href is /Product-Details", () => {
        const pageNotFoundTest2 = screen.getByRole("link", {
            name: "Used Cars",
        });

        expect(pageNotFoundTest2).toBeInTheDocument();

    })
})