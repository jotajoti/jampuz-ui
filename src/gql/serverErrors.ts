import {CombinedError} from "@urql/core";
import {t} from "@lingui/macro";

export enum ServerErrorCode {
    PARTICIPANT_NAME_NOT_AVAILABLE = 1,
}

const serverErrorCodeMap: Record<number, ServerErrorCode> = {};

Object.values(ServerErrorCode).forEach((value) => {
    if (typeof value === "number") {
        serverErrorCodeMap[value] = value;
    }
});

export const extractErrorCodes = (error: CombinedError | null): ServerErrorCode[] => {
    const serverErrorCodes: ServerErrorCode[] = [];

    error?.graphQLErrors.forEach(graphQLError => {
        const errorCodesExtension = graphQLError.extensions["errorCodes"];
        if (errorCodesExtension) {
            (errorCodesExtension as number[]).forEach(errorCode => {
                serverErrorCodes.push(serverErrorCodeMap[errorCode]);
            });
        }
    });

    return serverErrorCodes;
}

export const hasErrorCode = (error: CombinedError | null, errorCode: ServerErrorCode) =>
    extractErrorCodes(error).indexOf(errorCode) > -1;

export const translateErrorCode = (errorCode: ServerErrorCode) => {
    switch (errorCode) {
        case ServerErrorCode.PARTICIPANT_NAME_NOT_AVAILABLE:
            return t`Participant name already taken`
    }
}
