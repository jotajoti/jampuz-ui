import {describe, expect, it} from "vitest";

import {landingLoader} from "../../landing";
import {GetFooterFragmentDoc, useFragment} from "../../gql";
import {graphqlHandler, graphQlServer} from "../vitest.unit.setup.ts";

describe("landingLoader", () => {
    it("loads successfully", async () => {

        graphQlServer.use(graphqlHandler("GetLanding", {
            serverVersion: "1.2.3"
        }));

        const result = await landingLoader();
        expect(result).toBeDefined();

        const footerFragment = useFragment(GetFooterFragmentDoc, result);
        expect(footerFragment).toBeDefined();
        expect(footerFragment!.serverVersion).toEqual("1.2.3");
    });
});