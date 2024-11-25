import {describe, expect, it} from "vitest";
import {render} from "vitest-browser-react";

import {StatBar, StatBarConfig} from "../../components/StatBar.tsx";

describe("StatBar", () => {
    it("renders", async () => {

        const statBarConfig: StatBarConfig = {
            stats: [{
                title: "Stat 1",
                value: 42
            }, {
                title: "Stat 2",
                value: "Forty Two"
            }]
        }

        const screen = render(<StatBar config={statBarConfig}/>);

        await expect.element(screen.getByTestId("statbar-0-title")).toHaveTextContent("Stat 1");
        await expect.element(screen.getByTestId("statbar-0-value")).toHaveTextContent("42");

        await expect.element(screen.getByTestId("statbar-1-title")).toHaveTextContent("Stat 2");
        await expect.element(screen.getByTestId("statbar-1-value")).toHaveTextContent("Forty Two");
    });
});