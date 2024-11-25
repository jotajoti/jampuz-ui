import {ActionFunctionArgs, replace} from "react-router";

import {
    AuthenticateParticipantDocument,
    client,
    CreateParticipantDocument,
    hasErrorCode,
    ServerErrorCode
} from "../../gql";
import {badRequest, unauthorized} from "../../utils/responses.ts";

export const joinEventAction = async ({params, request}: ActionFunctionArgs) => {

    const formData = await request.formData();

    if (formData.has("joinButton") && formData.get("eventId") && formData.get("name")) {
        const eventId = formData.get("eventId") as string;
        const name = formData.get("name") as string;

        const result = await client().mutation(CreateParticipantDocument, {
            input: {
                eventId,
                name,
            }
        });

        if (result.error) {
            if (hasErrorCode(result.error, ServerErrorCode.PARTICIPANT_NAME_NOT_AVAILABLE)) {
                return badRequest({errorCode: ServerErrorCode.PARTICIPANT_NAME_NOT_AVAILABLE});
            } else {
                return badRequest({error: result.error.message});
            }
        } else {
            const authenticateResult = await client().mutation(AuthenticateParticipantDocument, {
                eventId,
                name,
                pinCode: result.data!.createParticipant!.pinCode!,
            });

            if (authenticateResult.error) {
                return unauthorized({error: authenticateResult.error.message});
            } else {
                localStorage.setItem("token", authenticateResult.data!.authenticateParticipant!);
            }
        }
    }

    return replace(`/${params.eventCode}`);
}