import { configureStore } from "@reduxjs/toolkit";
import { interfaceCombineReducer } from "interfaces/reducers/combine-reducer.interface";
import { LoginReducer } from "store/reducer";

const listOfReducer: interfaceCombineReducer = {
  rLogin: LoginReducer,
};

const store = configureStore({
  reducer: listOfReducer,
});

export default store;
