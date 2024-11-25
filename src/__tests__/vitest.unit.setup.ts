import {afterAll, afterEach, beforeAll, vi} from 'vitest'
import {setupServer} from 'msw/node'
import {graphql, GraphQLQuery, HttpResponse} from 'msw'
import WebSocket from "ws";

vi.stubGlobal("window", {})

vi.mock(import("graphql-ws"), async importOriginal => {
    const original = await importOriginal();
    return {
        ...original,
        createClient: options => original.createClient({
            ...options,
            webSocketImpl: WebSocket
        })
    }
});

export const graphqlHandler = (queryName: string, data: GraphQLQuery | null) =>
    graphql.query(queryName, () => HttpResponse.json({data}))

export const graphQlServer = setupServer()

// Start server before all tests
beforeAll(() => graphQlServer.listen({onUnhandledRequest: 'error'}))

//  Close server after all tests
afterAll(() => graphQlServer.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => graphQlServer.resetHandlers())