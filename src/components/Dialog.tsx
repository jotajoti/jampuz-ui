import {forwardRef, ReactNode, SyntheticEvent, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

export type DialogRef = {
    showDialog: () => void
    closeDialog: () => void
}

export type DialogAction = {
    label: ReactNode
    classNames?: string
    disabled?: boolean
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void
}

type DialogProps = {
    title: ReactNode
    children: ReactNode
    actions?: DialogAction[]
    onClose?: () => void
}

export const Dialog = forwardRef<DialogRef, DialogProps>(({title, children, actions, onClose}: DialogProps, ref) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(ref, (): DialogRef => ({
        showDialog: () => dialogRef.current!.showModal(),
        closeDialog: () => dialogRef.current!.close(),
    }));

    const dialog = (
        <dialog ref={dialogRef} className="modal" onClose={onClose}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <div className="py-4">{children}</div>
                {actions && (
                    <div className="modal-action">
                        <form method="dialog">
                            {actions.map((action, index) => (
                                <button key={index}
                                        className={`btn ml-4 ${action.classNames}`}
                                        disabled={action.disabled}
                                        onClick={action.onClick}>
                                    {action.label}
                                </button>
                            ))}
                        </form>
                    </div>
                )}
            </div>
            <form method="dialog" className="modal-backdrop opacity-50 bg-neutral">
                <button>close</button>
            </form>
        </dialog>
    );

    return createPortal(dialog, document.body);
})
