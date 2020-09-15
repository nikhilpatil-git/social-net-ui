import { Box, Grid } from "@chakra-ui/core";
import React, { Context, createContext, Reducer, useEffect, useReducer, useState } from "react";
import { Header } from "../components/header";
import LoadingOverlay from "react-loading-overlay";
import { Main } from "../components/main";
import { UserAction, InitialEventState, UserState } from "../components/action_state";
import { UserReducer } from "../components/user_reducer";
import { Layout } from "../components/layout";

export const UserStateContext: Context<UserState> = createContext(
  InitialEventState
);

export const UserReducerContext = createContext(
  (() => 0) as React.Dispatch<UserAction>
);


export default function Home() {
const [isLoading, setIsLoading] = useState(true);
const [isResponseAvailable, setIsResponseAvailable] = useState(true);

const [state, dispatch] = useReducer<Reducer<UserState, UserAction>>(
  UserReducer,
  InitialEventState
);

  return (
    <UserReducerContext.Provider value={dispatch}>
    <UserStateContext.Provider value={state}>     
      <Layout />
    </UserStateContext.Provider>
     </UserReducerContext.Provider> 
  );
};