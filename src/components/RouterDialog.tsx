import {ReactNode, SyntheticEvent, useCallback, useEffect} from "react";
import {Form, useSubmit} from "react-router";

export type RouterDialogActionCallback = {
    cancel: () => void
}

export type RouterDialogAction = {
    label: ReactNode
    type: "button" | "submit" | "reset"
    classNames?: string
    name?: string
    disabled?: boolean
    callback?: (callback: RouterDialogActionCallback) => void
}

type RouterDialogProps = {
    title: ReactNode
    children: ReactNode
    actions: RouterDialogAction[]
}

export const RouterDialog = ({title, children, actions}: RouterDialogProps) => {
    const submit = useSubmit();

    const cancel = useCallback(() => {
        submit(null, {method: "post"});
    }, [submit]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                cancel();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [cancel]);

    const handleActionCallback = (e: SyntheticEvent<HTMLButtonElement>, action: RouterDialogAction) => {
        if (action.callback) {
            action.callback({
                cancel: () => {
                    e.preventDefault();
                    cancel();
                }
            });
        }
    };

    return (
        <dialog className="modal modal-open">
            <div className="modal-box">
                <Form method="post">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className="py-4">
                        {children}
                    </div>
                    <div className="modal-action">
                        {actions.map((action, index) => (
                            <button key={index}
                                    className={`btn ml-4 ${action.classNames ? action.classNames : ''}`}
                                    disabled={action.disabled}
                                    name={action.name}
                                    type={action.type}
                                    onClick={e => handleActionCallback(e, action)}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </Form>
            </div>
            <Form method="post" className="modal-backdrop opacity-50 bg-neutral">
                <button>close</button>
            </Form>
        </dialog>
    );
}