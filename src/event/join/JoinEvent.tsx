import {useActionData, useLoaderData} from "react-router";
import {t} from "@lingui/core/macro";
import {Trans} from "@lingui/react/macro";

import {GetEventDetailsQuery, translateErrorCode} from "../../gql";
import {OptionalErrorResponseBody} from "../../utils/responses.ts";
import {RouterDialog, RouterDialogAction} from "../../components/RouterDialog.tsx";

export const JoinEvent = () => {
    const loaderData = useLoaderData() as GetEventDetailsQuery;
    const actionData = useActionData() as OptionalErrorResponseBody;

    const locationName = loaderData.event!.location.name;
    const eventYear = loaderData.event!.year;

    const error = actionData?.errorCode
        ? translateErrorCode(actionData.errorCode)
        : actionData?.error;

    const dialogActions: RouterDialogAction[] = [{
        label: <Trans>Cancel</Trans>,
        type: "button",
        callback: callback => callback.cancel(),
    }, {
        label: <Trans>Join</Trans>,
        type: "submit",
        name: "joinButton",
        classNames: "btn-primary",
    }];

    return (
        <RouterDialog title={<Trans comment="Join modal title">Join {locationName} {eventYear}</Trans>}
                      actions={dialogActions}>
            <input type="hidden" name="eventId" value={loaderData.event?.id}/>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text"><Trans>What is your name?</Trans></span>
                </div>
                <input type="text"
                       placeholder={t`Name`}
                       autoFocus
                       required={true}
                       autoComplete="off"
                       name="name"
                       className={`input input-bordered w-full ${error && "input-error"}`}/>
            </label>
            {error && <div className="label">
                <span className="label-text text-error">{error}</span>
            </div>}
        </RouterDialog>
    );
}
