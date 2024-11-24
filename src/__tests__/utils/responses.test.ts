import {describe, expect, it} from "vitest";

import {badRequest} from "../../utils/responses";

describe("badRequest", () => {

    it("should return valid response", async () => {
        const errorResponseBody = {error: "Error message"};

        const response = badRequest(errorResponseBody);

        expect(response).toBeInstanceOf(Response);
        expect(response.status).toBe(400);
        expect(await response.json()).toStrictEqual(errorResponseBody)
    });
});
