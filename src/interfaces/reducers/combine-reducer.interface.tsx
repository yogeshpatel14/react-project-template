import { Action, Reducer } from "redux";
import { interfaceLoginReducer } from "./login.interface";

type interfaceCombineReducer = {
  rLogin: Reducer<interfaceLoginReducer, Action>;
};

export type { interfaceCombineReducer };
