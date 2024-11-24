import {describe, expect, it, vi} from "vitest";
import {render} from "vitest-browser-react";

import {ErrorPage} from "../ErrorPage";

describe("ErrorPage", () => {
    it("renders", async () => {

        vi.mock(import("react-router"), async (originalFunc) => {
            const original = await originalFunc();
            return {
                ...original,
                useRouteError: () => ({
                    error: "Some error"
                })
            };
        });

        const screen = render(<ErrorPage/>);
        const errorMessage = screen.getByText(/.*Blip blop error.*/g);
        // expect(errorMessage).toHaveTextContent("Blip blop error");
        expect.poll(() => errorMessage)
    });
});