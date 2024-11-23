import {ReactNode} from "react";
import {Form, Link, useActionData, useLoaderData} from "react-router";
import {t, Trans} from "@lingui/macro";
import {XCircleIcon} from "@heroicons/react/24/outline";
import {EnvelopeIcon, KeyIcon, UserCircleIcon} from "@heroicons/react/16/solid";

import {DefaultNavTitle} from "../../components/DefaultNavTitle.tsx";
import {Layout} from "../../Layout.tsx";
import {GetAdminRegisterQuery, translateErrorCode} from "../../gql";
import {RegisterResult} from "./adminRegisterAction.ts";

const RegisterForm = () => {
    return (
        <>
            <label className="input input-bordered flex items-center gap-2">
                <UserCircleIcon className="size-4 opacity-70"/>
                <input type="text"
                       className="grow"
                       name="name"
                       required={true}
                       placeholder={t`Name`}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <EnvelopeIcon className="size-4 opacity-70"/>
                <input type="email"
                       className="grow"
                       name="email"
                       required={true}
                       placeholder={t`Email`}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <KeyIcon className="size-4 opacity-70"/>
                <input type="password"
                       className="grow"
                       name="password"
                       required={true}
                       placeholder={t`Password`}/>
            </label>

            <button className="btn btn-primary" type="submit"><Trans>Register</Trans></button>


            <div className="mt-8">
                <Trans>
                    Already have an account? <Link to="/admin/login" className="link link-secondary">Login</Link>
                </Trans>
            </div>
        </>
    )
}

export const AdminRegister = () => {
    const loaderData = useLoaderData() as GetAdminRegisterQuery;
    const actionData = useActionData() as RegisterResult;

    const content = (): ReactNode => {
        switch (actionData?.result) {
            case "success":
                return (
                    <Trans>
                        You have created an account successfully.
                        Go to <Link to="/admin/login" className="link link-secondary">Login</Link>
                    </Trans>
                );
            case "failure":
                return (
                    <>
                        {actionData.serverErrorCodes.map((errorCode, i) => (
                            <div key={i} role="alert" className="alert alert-error">
                                <XCircleIcon className="size-6"/>
                                <span>{translateErrorCode(errorCode)}</span>
                            </div>
                        ))}
                        <RegisterForm/>
                    </>
                );
            default:
                return (
                    <RegisterForm/>
                );
        }
    }

    return (
        <Layout navigationStart={<DefaultNavTitle/>} getFooterFragment={loaderData}>

            <Form className="flex justify-center mt-12" method="POST">
                <div className="w-80 flex flex-col gap-4 bg-base-100 p-8 border-2 rounded-box">
                    {content()}
                </div>
            </Form>

        </Layout>
    )
}