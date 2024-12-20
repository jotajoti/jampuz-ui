import {Link, useLoaderData} from "react-router";
import {Trans} from "@lingui/react/macro";

import {Layout} from "../Layout";
import {DefaultNavTitle} from "../components/DefaultNavTitle.tsx";
import {GetLandingQuery} from "../gql";

export const Landing = () => {
    const loaderData = useLoaderData() as GetLandingQuery;

    return (
        <Layout
            navigationStart={<DefaultNavTitle/>}
            navigationEnd={
                <Link to="/admin" className="btn btn-ghost"><Trans>Admin</Trans></Link>
            }
            getFooterFragment={loaderData}
        >
            Hello
        </Layout>
    );
}
