import {RouterDialog, RouterDialogAction} from "../../../components/RouterDialog.tsx";
import {t, Trans} from "@lingui/macro";
import {useActionData} from "react-router-dom";
import {OptionalErrorResponseBody} from "../../../utils/responses.ts";
import {translateErrorCode} from "../../../gql";

export const AddOwner = () => {
    const actionData = useActionData() as OptionalErrorResponseBody;

    const error = actionData?.errorCode
        ? translateErrorCode(actionData.errorCode)
        : actionData?.error;

    const dialogActions: RouterDialogAction[] = [{
        label: <Trans>Cancel</Trans>,
        type: "button",
        callback: callback => callback.cancel(),
    }, {
        label: <Trans>Add</Trans>,
        type: "submit",
        name: "addButton",
        classNames: "btn-primary",
    }];

    return (
        <RouterDialog title={<Trans>Add owner</Trans>} actions={dialogActions}>
            <label className="form-control w-full">
                <input type="email"
                       placeholder={t`Admin email`}
                       autoFocus
                       required={true}
                       autoComplete="off"
                       name="email"
                       className={`input input-bordered w-full ${error && "input-error"}`}/>
            </label>
            {error && <div className="label">
                <span className="label-text text-error">{error}</span>
            </div>}
        </RouterDialog>
    )
}
