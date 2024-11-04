/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query FooterQuery {\n  serverVersion\n}": types.FooterQueryDocument,
    "mutation AuthenticateParticipant($eventId: ID!, $name: String!, $pinCode: String!) {\n  authenticateParticipant(eventId: $eventId, name: $name, pinCode: $pinCode)\n}": types.AuthenticateParticipantDocument,
    "mutation CreateParticipant($input: CreateParticipantInput!) {\n  createParticipant(input: $input) {\n    id\n    name\n    pinCode\n  }\n}": types.CreateParticipantDocument,
    "query GetEvent($code: String!) {\n  authenticatedParticipant {\n    id\n    name\n    event {\n      id\n    }\n  }\n  event(code: $code) {\n    id\n    location {\n      name\n    }\n    code {\n      value\n    }\n    year\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountryCount\n      countryStats {\n        country\n        uniqueCount\n      }\n    }\n    participants {\n      id\n      name\n      jidCodeStats {\n        uniqueCount\n        uniqueCountryCount\n      }\n    }\n  }\n}": types.GetEventDocument,
    "mutation RegisterJidCode($input: RegisterFoundJidCode!) {\n  registerFoundJidCode(input: $input) {\n    id\n  }\n}": types.RegisterJidCodeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FooterQuery {\n  serverVersion\n}"): (typeof documents)["query FooterQuery {\n  serverVersion\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AuthenticateParticipant($eventId: ID!, $name: String!, $pinCode: String!) {\n  authenticateParticipant(eventId: $eventId, name: $name, pinCode: $pinCode)\n}"): (typeof documents)["mutation AuthenticateParticipant($eventId: ID!, $name: String!, $pinCode: String!) {\n  authenticateParticipant(eventId: $eventId, name: $name, pinCode: $pinCode)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateParticipant($input: CreateParticipantInput!) {\n  createParticipant(input: $input) {\n    id\n    name\n    pinCode\n  }\n}"): (typeof documents)["mutation CreateParticipant($input: CreateParticipantInput!) {\n  createParticipant(input: $input) {\n    id\n    name\n    pinCode\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetEvent($code: String!) {\n  authenticatedParticipant {\n    id\n    name\n    event {\n      id\n    }\n  }\n  event(code: $code) {\n    id\n    location {\n      name\n    }\n    code {\n      value\n    }\n    year\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountryCount\n      countryStats {\n        country\n        uniqueCount\n      }\n    }\n    participants {\n      id\n      name\n      jidCodeStats {\n        uniqueCount\n        uniqueCountryCount\n      }\n    }\n  }\n}"): (typeof documents)["query GetEvent($code: String!) {\n  authenticatedParticipant {\n    id\n    name\n    event {\n      id\n    }\n  }\n  event(code: $code) {\n    id\n    location {\n      name\n    }\n    code {\n      value\n    }\n    year\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountryCount\n      countryStats {\n        country\n        uniqueCount\n      }\n    }\n    participants {\n      id\n      name\n      jidCodeStats {\n        uniqueCount\n        uniqueCountryCount\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RegisterJidCode($input: RegisterFoundJidCode!) {\n  registerFoundJidCode(input: $input) {\n    id\n  }\n}"): (typeof documents)["mutation RegisterJidCode($input: RegisterFoundJidCode!) {\n  registerFoundJidCode(input: $input) {\n    id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;