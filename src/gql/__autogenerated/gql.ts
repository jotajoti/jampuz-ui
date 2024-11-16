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
    "query Admin {\n  authenticatedAdmin {\n    id\n    name\n  }\n  ...GetFooter\n}": types.AdminDocument,
    "query GetAdminEvent($eventId: ID!) {\n  eventById(eventId: $eventId) {\n    id\n    code {\n      value\n    }\n    year\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountries\n    }\n    location {\n      id\n      name\n    }\n  }\n}": types.GetAdminEventDocument,
    "mutation CreateEvent($input: CreateEventInput!) {\n  createEvent(input: $input) {\n    id\n  }\n}": types.CreateEventDocument,
    "query GetAdminLocation($locationId: ID!) {\n  location(locationId: $locationId) {\n    id\n    name\n    ...GetAdminLocationEvents\n    ...GetAdminLocationOwners\n  }\n}": types.GetAdminLocationDocument,
    "fragment GetAdminLocationEvents on Location {\n  events {\n    id\n    code {\n      value\n    }\n    year\n    active\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountryCount\n    }\n    participants {\n      id\n    }\n  }\n}": types.GetAdminLocationEventsFragmentDoc,
    "fragment GetAdminLocationOwners on Location {\n  owners {\n    id\n    name\n  }\n}": types.GetAdminLocationOwnersFragmentDoc,
    "fragment GetAdminLocations on Query {\n  locations {\n    id\n    name\n    latestEvent {\n      id\n      year\n    }\n    events {\n      id\n    }\n  }\n}": types.GetAdminLocationsFragmentDoc,
    "mutation CreateLocation($input: CreateLocationInput!) {\n  createLocation(input: $input) {\n    id\n  }\n}": types.CreateLocationDocument,
    "query GetAdminLogin {\n  authenticatedAdmin {\n    id\n  }\n  ...GetFooter\n}": types.GetAdminLoginDocument,
    "mutation AuthenticateAdmin($email: String!, $password: String!) {\n  authenticateAdmin(email: $email, password: $password)\n}": types.AuthenticateAdminDocument,
    "query AdminOverview {\n  ...GetAdminLocations\n}": types.AdminOverviewDocument,
    "query GetAdminRegister {\n  authenticatedAdmin {\n    id\n  }\n  ...GetFooter\n}": types.GetAdminRegisterDocument,
    "mutation CreateAdmin($input: CreateAdmin!) {\n  createAdmin(input: $input) {\n    id\n  }\n}": types.CreateAdminDocument,
    "fragment GetFooter on Query {\n  serverVersion\n}": types.GetFooterFragmentDoc,
    "subscription EventSubscription($eventId: ID!) {\n  eventUpdated(eventId: $eventId)\n}": types.EventSubscriptionDocument,
    "query GetEvent($code: String!) {\n  authenticatedParticipant {\n    id\n    name\n    event {\n      id\n    }\n  }\n  authenticatedAdmin {\n    id\n  }\n  event(code: $code) {\n    id\n    location {\n      id\n      name\n      owners {\n        id\n      }\n    }\n    code {\n      value\n    }\n    year\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountryCount\n    }\n    ...Countries\n    ...Participants\n    ...StatBar\n  }\n  ...GetFooter\n}": types.GetEventDocument,
    "mutation RegisterJidCode($input: RegisterFoundJidCode!) {\n  registerFoundJidCode(input: $input) {\n    id\n  }\n}": types.RegisterJidCodeDocument,
    "fragment Countries on Event {\n  jidCodeStats {\n    countryStats {\n      country\n      uniqueCount\n    }\n  }\n}": types.CountriesFragmentDoc,
    "mutation AuthenticateParticipant($eventId: ID!, $name: String!, $pinCode: String!) {\n  authenticateParticipant(eventId: $eventId, name: $name, pinCode: $pinCode)\n}": types.AuthenticateParticipantDocument,
    "mutation CreateParticipant($input: CreateParticipantInput!) {\n  createParticipant(input: $input) {\n    id\n    name\n    pinCode\n  }\n}": types.CreateParticipantDocument,
    "query GetEventDetails($eventCode: String!) {\n  event(code: $eventCode) {\n    id\n    location {\n      name\n    }\n    year\n  }\n}": types.GetEventDetailsDocument,
    "fragment Participants on Event {\n  participants {\n    id\n    name\n    jidCodeStats {\n      uniqueCount\n      uniqueCountryCount\n    }\n  }\n}": types.ParticipantsFragmentDoc,
    "fragment StatBar on Event {\n  participants {\n    id\n  }\n  jidCodeStats {\n    count\n    uniqueCountryCount\n  }\n}": types.StatBarFragmentDoc,
    "query GetLanding {\n  ...GetFooter\n}": types.GetLandingDocument,
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
export function graphql(source: "query Admin {\n  authenticatedAdmin {\n    id\n    name\n  }\n  ...GetFooter\n}"): (typeof documents)["query Admin {\n  authenticatedAdmin {\n    id\n    name\n  }\n  ...GetFooter\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAdminEvent($eventId: ID!) {\n  eventById(eventId: $eventId) {\n    id\n    code {\n      value\n    }\n    year\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountries\n    }\n    location {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query GetAdminEvent($eventId: ID!) {\n  eventById(eventId: $eventId) {\n    id\n    code {\n      value\n    }\n    year\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountries\n    }\n    location {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateEvent($input: CreateEventInput!) {\n  createEvent(input: $input) {\n    id\n  }\n}"): (typeof documents)["mutation CreateEvent($input: CreateEventInput!) {\n  createEvent(input: $input) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAdminLocation($locationId: ID!) {\n  location(locationId: $locationId) {\n    id\n    name\n    ...GetAdminLocationEvents\n    ...GetAdminLocationOwners\n  }\n}"): (typeof documents)["query GetAdminLocation($locationId: ID!) {\n  location(locationId: $locationId) {\n    id\n    name\n    ...GetAdminLocationEvents\n    ...GetAdminLocationOwners\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment GetAdminLocationEvents on Location {\n  events {\n    id\n    code {\n      value\n    }\n    year\n    active\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountryCount\n    }\n    participants {\n      id\n    }\n  }\n}"): (typeof documents)["fragment GetAdminLocationEvents on Location {\n  events {\n    id\n    code {\n      value\n    }\n    year\n    active\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountryCount\n    }\n    participants {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment GetAdminLocationOwners on Location {\n  owners {\n    id\n    name\n  }\n}"): (typeof documents)["fragment GetAdminLocationOwners on Location {\n  owners {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment GetAdminLocations on Query {\n  locations {\n    id\n    name\n    latestEvent {\n      id\n      year\n    }\n    events {\n      id\n    }\n  }\n}"): (typeof documents)["fragment GetAdminLocations on Query {\n  locations {\n    id\n    name\n    latestEvent {\n      id\n      year\n    }\n    events {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateLocation($input: CreateLocationInput!) {\n  createLocation(input: $input) {\n    id\n  }\n}"): (typeof documents)["mutation CreateLocation($input: CreateLocationInput!) {\n  createLocation(input: $input) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAdminLogin {\n  authenticatedAdmin {\n    id\n  }\n  ...GetFooter\n}"): (typeof documents)["query GetAdminLogin {\n  authenticatedAdmin {\n    id\n  }\n  ...GetFooter\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AuthenticateAdmin($email: String!, $password: String!) {\n  authenticateAdmin(email: $email, password: $password)\n}"): (typeof documents)["mutation AuthenticateAdmin($email: String!, $password: String!) {\n  authenticateAdmin(email: $email, password: $password)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AdminOverview {\n  ...GetAdminLocations\n}"): (typeof documents)["query AdminOverview {\n  ...GetAdminLocations\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAdminRegister {\n  authenticatedAdmin {\n    id\n  }\n  ...GetFooter\n}"): (typeof documents)["query GetAdminRegister {\n  authenticatedAdmin {\n    id\n  }\n  ...GetFooter\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateAdmin($input: CreateAdmin!) {\n  createAdmin(input: $input) {\n    id\n  }\n}"): (typeof documents)["mutation CreateAdmin($input: CreateAdmin!) {\n  createAdmin(input: $input) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment GetFooter on Query {\n  serverVersion\n}"): (typeof documents)["fragment GetFooter on Query {\n  serverVersion\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription EventSubscription($eventId: ID!) {\n  eventUpdated(eventId: $eventId)\n}"): (typeof documents)["subscription EventSubscription($eventId: ID!) {\n  eventUpdated(eventId: $eventId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetEvent($code: String!) {\n  authenticatedParticipant {\n    id\n    name\n    event {\n      id\n    }\n  }\n  authenticatedAdmin {\n    id\n  }\n  event(code: $code) {\n    id\n    location {\n      id\n      name\n      owners {\n        id\n      }\n    }\n    code {\n      value\n    }\n    year\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountryCount\n    }\n    ...Countries\n    ...Participants\n    ...StatBar\n  }\n  ...GetFooter\n}"): (typeof documents)["query GetEvent($code: String!) {\n  authenticatedParticipant {\n    id\n    name\n    event {\n      id\n    }\n  }\n  authenticatedAdmin {\n    id\n  }\n  event(code: $code) {\n    id\n    location {\n      id\n      name\n      owners {\n        id\n      }\n    }\n    code {\n      value\n    }\n    year\n    jidCodeStats {\n      count\n      uniqueCount\n      uniqueCountryCount\n    }\n    ...Countries\n    ...Participants\n    ...StatBar\n  }\n  ...GetFooter\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RegisterJidCode($input: RegisterFoundJidCode!) {\n  registerFoundJidCode(input: $input) {\n    id\n  }\n}"): (typeof documents)["mutation RegisterJidCode($input: RegisterFoundJidCode!) {\n  registerFoundJidCode(input: $input) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Countries on Event {\n  jidCodeStats {\n    countryStats {\n      country\n      uniqueCount\n    }\n  }\n}"): (typeof documents)["fragment Countries on Event {\n  jidCodeStats {\n    countryStats {\n      country\n      uniqueCount\n    }\n  }\n}"];
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
export function graphql(source: "query GetEventDetails($eventCode: String!) {\n  event(code: $eventCode) {\n    id\n    location {\n      name\n    }\n    year\n  }\n}"): (typeof documents)["query GetEventDetails($eventCode: String!) {\n  event(code: $eventCode) {\n    id\n    location {\n      name\n    }\n    year\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Participants on Event {\n  participants {\n    id\n    name\n    jidCodeStats {\n      uniqueCount\n      uniqueCountryCount\n    }\n  }\n}"): (typeof documents)["fragment Participants on Event {\n  participants {\n    id\n    name\n    jidCodeStats {\n      uniqueCount\n      uniqueCountryCount\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment StatBar on Event {\n  participants {\n    id\n  }\n  jidCodeStats {\n    count\n    uniqueCountryCount\n  }\n}"): (typeof documents)["fragment StatBar on Event {\n  participants {\n    id\n  }\n  jidCodeStats {\n    count\n    uniqueCountryCount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetLanding {\n  ...GetFooter\n}"): (typeof documents)["query GetLanding {\n  ...GetFooter\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;