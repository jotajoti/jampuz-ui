import {t} from "@lingui/core/macro";
import {Trans} from "@lingui/react/macro";
import {useActionData} from "react-router";

import {RouterDialog, RouterDialogAction} from "../../../components/RouterDialog.tsx";
import {OptionalErrorResponseBody} from "../../../utils/responses.ts";
import {translateErrorCode} from "../../../gql";

export const AdminCreateLocation = () => {
    const actionData = useActionData() as OptionalErrorResponseBody;

    const error = actionData?.errorCode
        ? translateErrorCode(actionData.errorCode)
        : actionData?.error;

    const dialogActions: RouterDialogAction[] = [{
        label: <Trans>Cancel</Trans>,
        type: "button",
        callback: callback => callback.cancel(),
    }, {
        label: <Trans>Create</Trans>,
        type: "submit",
        name: "createButton",
        classNames: "btn-primary",
    }];

    return (
        <RouterDialog title={<Trans>Add location</Trans>} actions={dialogActions}>
            <label className="form-control w-full">
                <input type="text"
                       placeholder={t`Location name`}
                       autoFocus
                       required={true}
                       autoComplete="off"
                       name="locationName"
                       className={`input input-bordered w-full ${error && "input-error"}`}/>
            </label>
            {error && <div className="label">
                <span className="label-text text-error">{error}</span>
            </div>}
        </RouterDialog>
    );
}
