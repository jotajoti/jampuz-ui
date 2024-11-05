import {forwardRef, SyntheticEvent, useImperativeHandle, useRef, useState} from "react";
import {useMutation, UseQueryExecute} from "urql";
import {t, Trans} from "@lingui/macro";

import {Dialog, DialogAction, DialogRef} from "../components/Dialog.tsx";

import {
    AuthenticateParticipantDocument,
    CreateParticipantDocument,
    GetEventQuery,
    hasErrorCode,
    ServerErrorCode,
    translateErrorCode
} from "../gql";

type JoinEventProps = {
    data: GetEventQuery
    reloadEvent: UseQueryExecute
}

const JoinEventDialog = forwardRef<DialogRef, JoinEventProps>(({data, reloadEvent}: JoinEventProps, ref) => {
    const joinEventDialogRef = useRef<DialogRef | null>(null);

    useImperativeHandle(ref, () => ({
        showDialog: () => joinEventDialogRef.current!.showDialog(),
        closeDialog: () => joinEventDialogRef.current!.closeDialog(),
    }));

    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [, createParticipant] = useMutation(CreateParticipantDocument);
    const [, authenticateParticipant] = useMutation(AuthenticateParticipantDocument);

    const closeDialog = () => {
        joinEventDialogRef.current!.closeDialog();
        setName("");
        setError(null);
    }

    const onJoin = async (e: SyntheticEvent<HTMLElement>) => {
        e.preventDefault()

        const result = await createParticipant({
            input: {
                eventId: data.event!.id,
                name,
            }
        }, {requestPolicy: 'network-only'});

        if (result.error) {
            if (hasErrorCode(result.error, ServerErrorCode.PARTICIPANT_NAME_NOT_AVAILABLE)) {
                setError(translateErrorCode(ServerErrorCode.PARTICIPANT_NAME_NOT_AVAILABLE));
            } else {
                setError(result.error.message);
            }
        } else {
            const authenticateResult = await authenticateParticipant({
                eventId: data.event!.id,
                name,
                pinCode: result.data!.createParticipant!.pinCode!
            });

            if (authenticateResult.error) {
                const errorMessage = authenticateResult.error.message;
                setError(t`Couldn't authenticate ${errorMessage}`);
            } else {
                localStorage.setItem("token", authenticateResult.data!.authenticateParticipant!);
                reloadEvent({requestPolicy: 'network-only'});

                closeDialog();
            }
        }
    }

    const actions: DialogAction[] = [{
        label: <Trans>Cancel</Trans>
    }, {
        label: <Trans>Join</Trans>,
        classNames: "btn-primary",
        onClick: onJoin
    }];

    const locationName = data.event!.location.name;
    const eventYear = data.event!.year;

    return (
        <Dialog ref={joinEventDialogRef}
                title={<Trans comment="Join modal title">Join ${locationName} ${eventYear}</Trans>}
                actions={actions}
                onClose={closeDialog}
        >
            <form method="dialog" onSubmit={onJoin}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text"><Trans>What is your name?</Trans></span>
                    </div>
                    <input type="text"
                           placeholder={t`Name`}
                           required={true}
                           autoComplete="off"
                           value={name}
                           onChange={e => setName(e.target.value)}
                           className={`input input-bordered w-full ${error ? "input-error" : ""}`}/>
                    {error && <div className="label">
                        <span className="label-text text-error">{error}</span>
                    </div>}
                </label>
            </form>
        </Dialog>
    )
})

export const JoinEventButton = ({data, reloadEvent}: JoinEventProps) => {
    const dialogRef = useRef<DialogRef | null>(null);

    const showDialog = () => {
        dialogRef.current?.showDialog();
    }

    return (
        <>
            <button className="btn btn-ghost" onClick={showDialog}><Trans>Join</Trans></button>
            <JoinEventDialog ref={dialogRef} reloadEvent={reloadEvent} data={data}/>
        </>
    );
}