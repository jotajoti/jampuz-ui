import {client, GetLandingDocument} from "../gql";

export const landingLoader = async () => {
    const result = await client().query(GetLandingDocument, {});

    return result.data;
}