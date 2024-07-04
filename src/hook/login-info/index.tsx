import { interfaceLoginReducer } from "interfaces/reducers/login.interface";
import { useAppSelector } from "store/use-app-selector";

function HookLoginInfo() {
  const { isLogin, loginInfo }: interfaceLoginReducer = useAppSelector(
    (state) => state.rLogin
  );
  return { isLogin, loginInfo };
}

export default HookLoginInfo;
