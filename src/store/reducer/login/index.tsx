import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { interfaceLoginReducer } from "interfaces/reducers/login.interface";

const initStates: interfaceLoginReducer = {
  isLogin: false,
  loginInfo: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState: initStates,
  reducers: {
    actionSaveLoginInfo(
      state: interfaceLoginReducer,
      action: PayloadAction<any>
    ) {
      state.isLogin = true;
      state.loginInfo = action.payload;
    },
  },
});

export const { actionSaveLoginInfo } = loginSlice.actions;
export default loginSlice.reducer;
