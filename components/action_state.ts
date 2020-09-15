import { User } from "../util";

export type UserState = {
    error?: string;
    isLoading?: boolean;
    isResponseAvailable?: boolean;
    serverResponse?: User[];
};
export const InitialEventState: UserState = {};

export type UserAction =
  | {
        type: "ServerError";
        result: string;
    }  
  | {
      type: "IsLoading";
      result: boolean;
    }  
  | {
      type: "ServerResponse";
      status: boolean;
      result: User[];
    }   