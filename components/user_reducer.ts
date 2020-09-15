import { Reducer } from "react";
import { UserState, UserAction } from "./action_state";

export const UserReducer: Reducer<UserState, UserAction> = (
  UserState: UserState,
  UserAction: UserAction
) => {
  let newState: UserState = { ...UserState };
  switch (UserAction.type) {
    case "ServerError":
      newState.error = UserAction.result;
      return newState;
    case "IsLoading":
      newState.isLoading = UserAction.result;
      return newState;
    case "ServerResponse":
      newState.isResponseAvailable = UserAction.status;
      newState.serverResponse = UserAction.result;
      return newState; 
    default:
      throw new Error("Event Action not found");
  }
};
