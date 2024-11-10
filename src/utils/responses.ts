import {ServerErrorCode} from "../gql";

export type OptionalErrorResponseBody = ErrorResponseBody | undefined;

export type ErrorResponseBody = {
    errorCode?: ServerErrorCode
    error?: string
}

export const badRequest = (errorResponseBody: ErrorResponseBody) =>
    errorResponse(errorResponseBody, 400);

export const unauthorized = (errorResponseBody: ErrorResponseBody) =>
    errorResponse(errorResponseBody, 401);

export const errorResponse = (errorResponseBody: ErrorResponseBody, statusCode: number) =>
    new Response(JSON.stringify(errorResponseBody), {
        status: statusCode,
        headers: {
            "Content-Type": "application/json; utf-8",
        },
    });
