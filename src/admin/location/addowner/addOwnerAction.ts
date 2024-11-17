import {ActionFunctionArgs, replace} from "react-router-dom";
import {AddOwnerDocument, client, hasErrorCode, ServerErrorCode} from "../../../gql";
import {badRequest} from "../../../utils/responses.ts";

export const addOwnerAction = async ({params, request}: ActionFunctionArgs) => {
    const locationId = params.locationId as string;
    const formData = await request.formData();

    if (formData.has("addButton") && formData.get("email")) {
        const adminEmail = formData.get("email") as string;

        const result = await client.mutation(AddOwnerDocument, {
            locationId,
            adminEmail,
        });

        if (result.error && hasErrorCode(result.error, ServerErrorCode.ADMIN_NOT_FOUND)) {
            return badRequest({errorCode: ServerErrorCode.ADMIN_NOT_FOUND});
        }
    }

    return replace(`/admin/locations/${params.locationId}`);
}