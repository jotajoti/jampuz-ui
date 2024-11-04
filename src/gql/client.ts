import {cacheExchange, Client, fetchExchange} from 'urql';

import {GRAPHQL_URL} from "../config.ts";

export const client = new Client({
    url: GRAPHQL_URL,
    suspense: true,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
        const options: RequestInit = {}

        const token = localStorage.getItem("token");
        if (token) {
            options.headers = {
                Authorization: `Bearer ${token}`
            }
        }

        return options;
    },
});
