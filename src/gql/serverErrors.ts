import {CombinedError} from "@urql/core";

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
