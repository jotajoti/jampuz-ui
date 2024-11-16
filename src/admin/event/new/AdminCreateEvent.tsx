import {RouterDialog, RouterDialogAction} from "../../../components/RouterDialog.tsx";
import {t, Trans} from "@lingui/macro";
import {useActionData} from "react-router-dom";
import {OptionalErrorResponseBody} from "../../../utils/responses.ts";
import {translateErrorCode} from "../../../gql";
import {JidCodeInput} from "../../../components/JidCodeInput.tsx";
import {useState} from "react";

export const AdminCreateEvent = () => {
    const [jidCode, setJidCode] = useState<string>("");

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
        <RouterDialog title={<Trans>Add event</Trans>} actions={dialogActions}>
            <label className="form-control w-full">
                <JidCodeInput
                    style={"form"}
                    name="code"
                    onValidJidCode={() => {
                    }} jidCode={jidCode}
                    setJidCode={setJidCode}/>
            </label>
            <label className="form-control w-full mt-4">
                <input type="number"
                       placeholder={t`Location name`}
                       required={true}
                       defaultValue={new Date().getFullYear()}
                       autoComplete="off"
                       name="year"
                       className={`input input-bordered w-full`}/>
            </label>
            {error && <div className="label">
                <span className="label-text text-error">{error}</span>
            </div>}
        </RouterDialog>
    )
}