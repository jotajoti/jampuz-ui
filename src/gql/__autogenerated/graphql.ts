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

export type FooterQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQueryQuery = { __typename?: 'Query', serverVersion: string };

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

export type GetEventQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type GetEventQuery = { __typename?: 'Query', authenticatedParticipant?: { __typename?: 'Participant', id: string, name: string, event: { __typename?: 'Event', id: string } } | null, event?: { __typename?: 'Event', id: string, year: number, location: { __typename?: 'Location', name: string }, code: { __typename?: 'JidCode', value: string }, jidCodeStats: { __typename?: 'JidCodeStats', count: number, uniqueCount: number, uniqueCountryCount: number, countryStats: Array<{ __typename?: 'CountryStat', country: string, uniqueCount: number }> }, participants: Array<{ __typename?: 'Participant', id: string, name: string, jidCodeStats: { __typename?: 'JidCodeStats', uniqueCount: number, uniqueCountryCount: number } }> } | null };

export type RegisterJidCodeMutationVariables = Exact<{
  input: RegisterFoundJidCode;
}>;


export type RegisterJidCodeMutation = { __typename?: 'Mutation', registerFoundJidCode?: { __typename?: 'FoundJidCode', id: string } | null };


export const FooterQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FooterQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverVersion"}}]}}]} as unknown as DocumentNode<FooterQueryQuery, FooterQueryQueryVariables>;
export const AuthenticateParticipantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthenticateParticipant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pinCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateParticipant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"eventId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"pinCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pinCode"}}}]}]}}]} as unknown as DocumentNode<AuthenticateParticipantMutation, AuthenticateParticipantMutationVariables>;
export const CreateParticipantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateParticipant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateParticipantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createParticipant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pinCode"}}]}}]}}]} as unknown as DocumentNode<CreateParticipantMutation, CreateParticipantMutationVariables>;
export const GetEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedParticipant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCountryCount"}},{"kind":"Field","name":{"kind":"Name","value":"countryStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jidCodeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueCount"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCountryCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEventQuery, GetEventQueryVariables>;
export const RegisterJidCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterJidCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterFoundJidCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerFoundJidCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RegisterJidCodeMutation, RegisterJidCodeMutationVariables>;