import {ActionFunctionArgs} from "react-router";

import {client, CreateAdminDocument, extractErrorCodes, ServerErrorCode} from "../../gql";

export type RegisterSuccess = {
    result: "success"
}

export type RegisterFailure = {
    result: "failure"
    serverErrorCodes: ServerErrorCode[]
}

export type RegisterResult = RegisterSuccess | RegisterFailure

export const adminRegisterAction = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await client.mutation(CreateAdminDocument, {
        input: {
            name,
            email,
            password,
        }
    });

    if (result.error) {
        return Response.json({
            result: "failure",
            serverErrorCodes: extractErrorCodes(result.error),
        }, {
            status: 400
        })
    }

    return Response.json({
        result: "success",
    });
}
