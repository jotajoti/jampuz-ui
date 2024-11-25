import {ActionFunctionArgs, replace} from "react-router";
import {client, CreateEventDocument, hasErrorCode, ServerErrorCode} from "../../../gql";
import {badRequest} from "../../../utils/responses.ts";

export const adminCreateEventAction = async ({params, request}: ActionFunctionArgs) => {
    const formData = await request.formData();

    if (formData.has("createButton") && formData.get("code") && formData.get("year")) {
        const locationId = params.locationId as string;
        const code = formData.get("code") as string;
        const year = +(formData.get("year") as string);

        const result = await client().mutation(CreateEventDocument, {
            input: {
                locationId,
                code,
                year,
                active: false,
            }
        });

        if (result.error) {
            if (hasErrorCode(result.error, ServerErrorCode.EVENT_CODE_AND_YEAR_NOT_AVAILABLE)) {
                return badRequest({errorCode: ServerErrorCode.EVENT_CODE_AND_YEAR_NOT_AVAILABLE});
            } else {
                return badRequest({error: result.error.message});
            }
        }

        return replace(`/admin/locations/$\{params.locationId}/events/${result.data?.createEvent?.id}`);
    }

    return replace(`/admin/locations/${params.locationId}`);
}
