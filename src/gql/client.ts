import {cacheExchange, Client, fetchExchange, subscriptionExchange} from 'urql';
import { createClient as createWSClient } from 'graphql-ws';

import {GRAPHQL_URL, GRAPHQL_WS_URL} from "../config.ts";

const wsClient = createWSClient({
    url: GRAPHQL_WS_URL,
});

export const client = new Client({
    url: GRAPHQL_URL,
    suspense: true,
    exchanges: [cacheExchange, fetchExchange, subscriptionExchange({
        forwardSubscription(request) {
            const input = {...request, query: request.query || ''};
            return {
                subscribe(sink) {
                    const unsubscribe = wsClient.subscribe(input, sink);
                    return {unsubscribe};
                },
            };
        },
    }),
    ],
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
