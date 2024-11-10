import {Form, useActionData, useLoaderData} from "react-router-dom";
import {t, Trans} from "@lingui/macro";
import {EnvelopeIcon, KeyIcon} from "@heroicons/react/16/solid";
import {XCircleIcon} from "@heroicons/react/24/outline";

import {Layout} from "../../Layout.tsx";
import {DefaultNavTitle} from "../../components/DefaultNavTitle.tsx";
import {GetAdminLoginQuery, ServerErrorCode, translateErrorCode} from "../../gql";

export const AdminLogin = () => {
    const loaderData = useLoaderData() as GetAdminLoginQuery;

    const actionData = useActionData() as ServerErrorCode[] | undefined;

    const error = actionData && actionData.map(errorCode => translateErrorCode(errorCode));

    return (
        <Layout navigationStart={<DefaultNavTitle/>} getFooterFragment={loaderData}>

            <Form className="flex justify-center mt-12" method="POST" action="/admin/login">
                <div className="w-80 flex flex-col gap-4 bg-base-100 p-8 border-2 rounded-box">
                    <label className="input input-bordered flex items-center gap-2">
                        <EnvelopeIcon className="size-4 opacity-70"/>
                        <input type="text"
                               className="grow"
                               name="email"
                               defaultValue="john.doe@example.com"
                               required={true}
                               placeholder={t`Email`}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <KeyIcon className="size-4 opacity-70"/>
                        <input type="password"
                               className="grow"
                               name="password"
                               defaultValue="john123"
                               required={true}
                               placeholder={t`Password`}/>
                    </label>
                    <button className="btn btn-primary" type="submit"><Trans>Login</Trans></button>

                    {error &&
                        error.map((e, i) => (
                            <div key={i} role="alert" className="alert alert-error">
                                <XCircleIcon className="size-6"/>
                                <span>{e}</span>
                            </div>
                        ))
                    }
                </div>
            </Form>

        </Layout>
    );
}