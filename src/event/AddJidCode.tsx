import {forwardRef, SyntheticEvent, useImperativeHandle, useRef, useState} from "react";
import {useMutation, UseQueryExecute} from "urql";
import {Trans} from "@lingui/macro";

import {Dialog, DialogAction, DialogRef} from "../components/Dialog.tsx";
import {JidCodeInput} from "../components/JidCodeInput.tsx";
import {RegisterJidCodeDocument} from "../gql";

type AddJidCodeProps = {
    eventId: string
    reloadEvent: UseQueryExecute
}

const AddJidCode = forwardRef<DialogRef, AddJidCodeProps>(({eventId, reloadEvent}: AddJidCodeProps, ref) => {
    const addJidCodeDialogRef = useRef<DialogRef | null>(null);

    useImperativeHandle(ref, () => ({
        showDialog: () => addJidCodeDialogRef.current!.showDialog(),
        closeDialog: () => addJidCodeDialogRef.current!.closeDialog(),
    }));

    const [jidCode, setJidCode] = useState<string>("");
    const [validJidCode, setValidJidCode] = useState<string | null>(null);

    const [, registerJidCode] = useMutation(RegisterJidCodeDocument);

    const closeDialog = () => {
        addJidCodeDialogRef.current!.closeDialog();
        setJidCode("");
        setValidJidCode(null);
    }

    const save = async (e: SyntheticEvent<HTMLElement>) => {
        e.preventDefault();

        if (validJidCode) {
            const result = await registerJidCode({
                input: {
                    eventId,
                    code: validJidCode,
                }
            });

            // TODO error handling
            if (result.error) {
                console.log({result});
            }

            reloadEvent({requestPolicy: 'network-only'});
            closeDialog();
        }
    }

    const actions: DialogAction[] = [{
        label: <Trans>Cancel</Trans>
    }, {
        label: <Trans>Save</Trans>,
        classNames: "btn-primary",
        disabled: !validJidCode,
        onClick: save
    }];


    return (
        <Dialog ref={addJidCodeDialogRef} onClose={closeDialog} title={<Trans>Add JID Code</Trans>} actions={actions}>
            <form method="dialog" onSubmit={save}>
                <label className="form-control w-full">
                    <JidCodeInput onValidJidCode={setValidJidCode} jidCode={jidCode} setJidCode={setJidCode}/>
                </label>
            </form>
        </Dialog>
    )
})

export const AddJidCodeButton = ({eventId, reloadEvent}: AddJidCodeProps) => {
    const dialogRef = useRef<DialogRef | null>(null);

    const showDialog = () => {
        dialogRef.current?.showDialog();
    }

    return (
        <>
            <button className="btn btn-ghost" onClick={showDialog}><Trans>Add JID Code</Trans></button>
            <AddJidCode ref={dialogRef} eventId={eventId} reloadEvent={reloadEvent}/>
        </>
    );
}
