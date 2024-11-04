import {forwardRef, SyntheticEvent, useImperativeHandle, useRef, useState} from "react";
import {useMutation, UseQueryExecute} from "urql";

import {Dialog, DialogAction, DialogRef} from "../components/Dialog.tsx";

import {
    AuthenticateParticipantDocument,
    CreateParticipantDocument,
    extractErrorCodes,
    GetEventQuery,
    ServerErrorCode
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
            const errorCodes = extractErrorCodes(result.error);
            if (errorCodes.indexOf(ServerErrorCode.PARTICIPANT_NAME_NOT_AVAILABLE) > -1) {
                setError("Participant name already taken.");
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
                setError(`Couldn't authenticate ${authenticateResult.error.message}`);
            } else {
                localStorage.setItem("token", authenticateResult.data!.authenticateParticipant!);
                reloadEvent({requestPolicy: 'network-only'});

                closeDialog();
            }
        }
    }

    const actions: DialogAction[] = [{
        label: "Cancel"
    }, {
        label: "Join",
        classNames: "btn-primary",
        onClick: onJoin
    }];

    return (
        <Dialog ref={joinEventDialogRef}
                title={`Join ${data.event!.location.name} ${data.event!.year}`}
                actions={actions}
                onClose={closeDialog}
        >
            <form method="dialog" onSubmit={onJoin}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text"
                           placeholder="Name"
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
            <button className="btn btn-ghost" onClick={showDialog}>Join</button>
            <JoinEventDialog ref={dialogRef} reloadEvent={reloadEvent} data={data}/>
        </>
    );
}