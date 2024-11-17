/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An RFC-3339 compliant Full Date Scalar */
  Date: { input: any; output: any; }
};

export type CreateAdmin = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateEventInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  code: Scalars['String']['input'];
  locationId: Scalars['ID']['input'];
  year: Scalars['Int']['input'];
};

export type CreateLocationInput = {
  name: Scalars['String']['input'];
};

export type CreateParticipantInput = {
  eventId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export enum Region {
  Africa = 'AFRICA',
  Arab = 'ARAB',
  AsiaPacific = 'ASIA_PACIFIC',
  Euroasia = 'EUROASIA',
  Europe = 'EUROPE',
  Interamerica = 'INTERAMERICA',
  Special = 'SPECIAL'
}

export type RegisterFoundJidCode = {
  code: Scalars['String']['input'];
  eventId: Scalars['ID']['input'];
};

export type UpdateEventInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminQuery = (
  { __typename?: 'Query', authenticatedAdmin?: { __typename?: 'Admin', id: string, name: string } | null }
  & { ' $fragmentRefs'?: { 'GetFooterFragment': GetFooterFragment } }
);

export type GetAdminEventQueryVariables = Exact<{
  eventId: Scalars['ID']['input'];
}>;


export type GetAdminEventQuery = { __typename?: 'Query', eventById?: { __typename?: 'Event', id: string, year: number, code: { __typename?: 'JidCode', value: string }, jidCodeStats: { __typename?: 'JidCodeStats', count: number, uniqueCount: number, uniqueCountries: Array<string> }, location: { __typename?: 'Location', id: string, name: string } } | null };

export type CreateEventMutationVariables = Exact<{
  input: CreateEventInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent?: { __typename?: 'Event', id: string } | null };

export type GetAdminLocationQueryVariables = Exact<{
  locationId: Scalars['ID']['input'];
}>;


export type GetAdminLocationQuery = { __typename?: 'Query', location?: (
    { __typename?: 'Location', id: string, name: string }
    & { ' $fragmentRefs'?: { 'GetAdminLocationEventsFragment': GetAdminLocationEventsFragment;'GetAdminLocationOwnersFragment': GetAdminLocationOwnersFragment } }
  ) | null };

export type GetAdminLocationEventsFragment = { __typename?: 'Location', events: Array<{ __typename?: 'Event', id: string, year: number, active: boolean, code: { __typename?: 'JidCode', value: string }, jidCodeStats: { __typename?: 'JidCodeStats', count: number, uniqueCount: number, uniqueCountryCount: number }, participants: Array<{ __typename?: 'Participant', id: string }> }> } & { ' $fragmentName'?: 'GetAdminLocationEventsFragment' };

export type GetAdminLocationOwnersFragment = { __typename?: 'Location', owners?: Array<{ __typename?: 'Admin', id: string, name: string }> | null } & { ' $fragmentName'?: 'GetAdminLocationOwnersFragment' };

export type GetAdminLocationsFragment = { __typename?: 'Query', locations?: Array<{ __typename?: 'Location', id: string, name: string, latestEvent?: { __typename?: 'Event', id: string, year: number } | null, events: Array<{ __typename?: 'Event', id: string }> }> | null } & { ' $fragmentName'?: 'GetAdminLocationsFragment' };

export type AddOwnerMutationVariables = Exact<{
  adminEmail: Scalars['String']['input'];
  locationId: Scalars['ID']['input'];
}>;


export type AddOwnerMutation = { __typename?: 'Mutation', addOwner?: { __typename?: 'Location', id: string } | null };

export type CreateLocationMutationVariables = Exact<{
  input: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation?: { __typename?: 'Location', id: string } | null };

export type GetAdminLoginQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminLoginQuery = (
  { __typename?: 'Query', authenticatedAdmin?: { __typename?: 'Admin', id: string } | null }
  & { ' $fragmentRefs'?: { 'GetFooterFragment': GetFooterFragment } }
);

export type AuthenticateAdminMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AuthenticateAdminMutation = { __typename?: 'Mutation', authenticateAdmin?: string | null };

export type AdminOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminOverviewQuery = (
  { __typename?: 'Query' }
  & { ' $fragmentRefs'?: { 'GetAdminLocationsFragment': GetAdminLocationsFragment } }
);

export type GetAdminRegisterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminRegisterQuery = (
  { __typename?: 'Query', authenticatedAdmin?: { __typename?: 'Admin', id: string } | null }
  & { ' $fragmentRefs'?: { 'GetFooterFragment': GetFooterFragment } }
);

export type CreateAdminMutationVariables = Exact<{
  input: CreateAdmin;
}>;


export type CreateAdminMutation = { __typename?: 'Mutation', createAdmin?: { __typename?: 'Admin', id: string } | null };

export type GetFooterFragment = { __typename?: 'Query', serverVersion: string } & { ' $fragmentName'?: 'GetFooterFragment' };

export type EventSubscriptionSubscriptionVariables = Exact<{
  eventId: Scalars['ID']['input'];
}>;


export type EventSubscriptionSubscription = { __typename?: 'Subscription', eventUpdated: string };

export type GetEventQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type GetEventQuery = (
  { __typename?: 'Query', authenticatedParticipant?: { __typename?: 'Participant', id: string, name: string, event: { __typename?: 'Event', id: string } } | null, authenticatedAdmin?: { __typename?: 'Admin', id: string } | null, event?: (
    { __typename?: 'Event', id: string, year: number, location: { __typename?: 'Location', id: string, name: string, owners?: Array<{ __typename?: 'Admin', id: string }> | null }, code: { __typename?: 'JidCode', value: string }, jidCodeStats: { __typename?: 'JidCodeStats', count: number, uniqueCount: number, uniqueCountryCount: number } }
    & { ' $fragmentRefs'?: { 'CountriesFragment': CountriesFragment;'ParticipantsFragment': ParticipantsFragment;'StatBarFragment': StatBarFragment } }
  ) | null }
  & { ' $fragmentRefs'?: { 'GetFooterFragment': GetFooterFragment } }
);

export type RegisterJidCodeMutationVariables = Exact<{
  input: RegisterFoundJidCode;
}>;


export type RegisterJidCodeMutation = { __typename?: 'Mutation', registerFoundJidCode?: { __typename?: 'FoundJidCode', id: string } | null };

export type CountriesFragment = { __typename?: 'Event', jidCodeStats: { __typename?: 'JidCodeStats', countryStats: Array<{ __typename?: 'CountryStat', country: string, uniqueCount: number }> } } & { ' $fragmentName'?: 'CountriesFragment' };

export type AuthenticateParticipantMutationVariables = Exact<{
  eventId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  pinCode: Scalars['String']['input'];
}>;


export type AuthenticateParticipantMutation = { __typename?: 'Mutation', authenticateParticipant?: string | null };

export type CreateParticipantMutationVariables = Exact<{
  input: CreateParticipantInput;
}>;


export type CreateParticipantMutation = { __typename?: 'Mutation', createParticipant?: { __typename?: 'Participant', id: string, name: string, pinCode?: string | null } | null };

export type GetEventDetailsQueryVariables = Exact<{
  eventCode: Scalars['String']['input'];
}>;


export type GetEventDetailsQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, year: number, location: { __typename?: 'Location', name: string } } | null };

export type ParticipantsFragment = { __typename?: 'Event', participants: Array<{ __typename?: 'Participant', id: string, name: string, jidCodeStats: { __typename?: 'JidCodeStats', uniqueCount: number, uniqueCountryCount: number } }> } & { ' $fragmentName'?: 'ParticipantsFragment' };

export type StatBarFragment = { __typename?: 'Event', participants: Array<{ __typename?: 'Participant', id: string }>, jidCodeStats: { __typename?: 'JidCodeStats', count: number, uniqueCountryCount: number } } & { ' $fragmentName'?: 'StatBarFragment' };

export type GetLandingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLandingQuery = (
  { __typename?: 'Query' }
  & { ' $fragmentRefs'?: { 'GetFooterFragment': GetFooterFragment } }
);

export const GetAdminLocationEventsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAdminLocationEvents"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCountryCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdminLocationEventsFragment, unknown>;
export const GetAdminLocationOwnersFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAdminLocationOwners"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"owners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAdminLocationOwnersFragment, unknown>;
export const GetAdminLocationsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAdminLocations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latestEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdminLocationsFragment, unknown>;
export const GetFooterFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetFooter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverVersion"}}]}}]} as unknown as DocumentNode<GetFooterFragment, unknown>;
export const CountriesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Countries"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}}]}}]}}]}}]} as unknown as DocumentNode<CountriesFragment, unknown>;
export const ParticipantsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Participants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCountryCount"}}]}}]}}]}}]} as unknown as DocumentNode<ParticipantsFragment, unknown>;
export const StatBarFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StatBar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCountryCount"}}]}}]}}]} as unknown as DocumentNode<StatBarFragment, unknown>;
export const AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetFooter"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetFooter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverVersion"}}]}}]} as unknown as DocumentNode<AdminQuery, AdminQueryVariables>;
export const GetAdminEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"eventId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCountries"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdminEventQuery, GetAdminEventQueryVariables>;
export const CreateEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateEventMutation, CreateEventMutationVariables>;
export const GetAdminLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAdminLocationEvents"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAdminLocationOwners"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAdminLocationEvents"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCountryCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAdminLocationOwners"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"owners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAdminLocationQuery, GetAdminLocationQueryVariables>;
export const AddOwnerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddOwner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adminEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addOwner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"adminEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adminEmail"}}},{"kind":"Argument","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddOwnerMutation, AddOwnerMutationVariables>;
export const CreateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateLocationMutation, CreateLocationMutationVariables>;
export const GetAdminLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminLogin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetFooter"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetFooter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverVersion"}}]}}]} as unknown as DocumentNode<GetAdminLoginQuery, GetAdminLoginQueryVariables>;
export const AuthenticateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthenticateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<AuthenticateAdminMutation, AuthenticateAdminMutationVariables>;
export const AdminOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAdminLocations"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAdminLocations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latestEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AdminOverviewQuery, AdminOverviewQueryVariables>;
export const GetAdminRegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminRegister"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetFooter"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetFooter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverVersion"}}]}}]} as unknown as DocumentNode<GetAdminRegisterQuery, GetAdminRegisterQueryVariables>;
export const CreateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAdmin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>;
export const EventSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"EventSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventUpdated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"eventId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}]}]}}]} as unknown as DocumentNode<EventSubscriptionSubscription, EventSubscriptionSubscriptionVariables>;
export const GetEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedParticipant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authenticatedAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCountryCount"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Countries"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Participants"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StatBar"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetFooter"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Countries"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Participants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCountryCount"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StatBar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCountryCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetFooter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverVersion"}}]}}]} as unknown as DocumentNode<GetEventQuery, GetEventQueryVariables>;
export const RegisterJidCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterJidCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterFoundJidCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerFoundJidCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RegisterJidCodeMutation, RegisterJidCodeMutationVariables>;
export const AuthenticateParticipantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthenticateParticipant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pinCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateParticipant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"eventId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"pinCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pinCode"}}}]}]}}]} as unknown as DocumentNode<AuthenticateParticipantMutation, AuthenticateParticipantMutationVariables>;
export const CreateParticipantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateParticipant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateParticipantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createParticipant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pinCode"}}]}}]}}]} as unknown as DocumentNode<CreateParticipantMutation, CreateParticipantMutationVariables>;
export const GetEventDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]} as unknown as DocumentNode<GetEventDetailsQuery, GetEventDetailsQueryVariables>;
export const GetLandingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetFooter"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetFooter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverVersion"}}]}}]} as unknown as DocumentNode<GetLandingQuery, GetLandingQueryVariables>;