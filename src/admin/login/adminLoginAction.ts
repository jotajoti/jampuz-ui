import {ActionFunctionArgs, redirect} from "react-router-dom";
import {AuthenticateAdminDocument, client, extractErrorCodes} from "../../gql";

export const adminLoginAction = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await client
        .mutation(AuthenticateAdminDocument, {
            email,
            password
        });

    if (result.error) {
        return extractErrorCodes(result.error);
    }

    localStorage.setItem("token", result.data!.authenticateAdmin!);

    return redirect("/admin");
}