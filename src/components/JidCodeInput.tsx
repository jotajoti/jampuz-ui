import {FormEvent, useState} from "react";
import {useMaskito} from "@maskito/react";
import type {MaskitoOptions} from "@maskito/core";
import {t} from "@lingui/macro";

type JidCodeInputProps = {
    onValidJidCode: (validJidCode: string | null) => void
    jidCode: string
    setJidCode: (jidCode: string) => void
}

export const jidCodeRegex = /[1-7]([A-Z]{2})[0-9]{2}[A-Z]/

const maskitoOptions: MaskitoOptions = {
    mask: [/[1-7]/, /[a-zA-Z]/, /[a-zA-Z]/, /\d/, /\d/, /[a-zA-Z]/],
    preprocessors: [
        ({elementState, data}) => {
            const {value, selection} = elementState

            return {
                elementState: {
                    selection,
                    value: value.toUpperCase()
                },
                data: data.toUpperCase()
            }
        }
    ],
}

export const JidCodeInput = ({onValidJidCode, jidCode, setJidCode}: JidCodeInputProps) => {

    const inputRef = useMaskito({
        options: maskitoOptions,
    });

    const [validJidCode, setValidJidCode] = useState<boolean>(false);

    const onValueUpdated = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setJidCode(value);
        const valid = jidCodeRegex.test(value);
        setValidJidCode(valid);
        if (valid) {
            onValidJidCode(value);
        } else {
            onValidJidCode(null);
        }
    }

    return (
        <input
            type="text"
            ref={inputRef}
            pattern={jidCodeRegex.source}
            required={true}
            value={jidCode}
            placeholder={t`Add Code`}
            onInput={onValueUpdated}
            className={`input input-bordered input-lg tracking-widest font-mono text-center ${validJidCode ? 'input-success' : ''}`}
        />
    );
}
