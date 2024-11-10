import {GetEventQuery} from "../gql";

export const isParticipantAuthenticated = (data: GetEventQuery) =>
    data.authenticatedParticipant?.event.id === data.event!.id;

export const isAdminAuthenticated = (data: GetEventQuery) =>
    data.authenticatedAdmin?.id
    &&
    data.event!.location!.owners!.map(owner => owner.id).includes(data.authenticatedAdmin!.id);

export const isAuthenticated = (data: GetEventQuery) =>
    isParticipantAuthenticated(data) || isAdminAuthenticated(data);
