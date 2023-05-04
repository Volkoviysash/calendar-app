import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

// Type of state
export interface EventState {
  guests: IUser[];
  events: IEvent[];
}
// Constants for actions
export enum EventsActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}
// Types for SET_GUEST action
export interface SetGuestsAction {
  type: EventsActionEnum.SET_GUESTS;
  payload: IUser[];
}
// Types for SET_EVENT action
export interface SetEventsAction {
  type: EventsActionEnum.SET_EVENTS;
  payload: IEvent[];
}

export type EventAction = SetGuestsAction | SetEventsAction;
