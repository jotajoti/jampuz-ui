import {ActionFunctionArgs, replace} from "react-router";

import {client, CreateLocationDocument} from "../../../gql";

export const adminCreateLocationAction = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData();

    if (formData.has("createButton") && formData.get("locationName")) {
        const locationName = formData.get("locationName") as string;

        const result = await client().mutation(CreateLocationDocument, {
            input: {
                name: locationName,
            }
        });

        return replace(`/admin/locations/${result.data?.createLocation?.id}`);
    }

    return replace("/admin");
}
