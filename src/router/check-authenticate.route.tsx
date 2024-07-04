import { ReactElement, useEffect } from "react";
import HookLoginInfo from "hook/login-info";
import { useNavigate } from "react-router-dom";

type propsProtectRoute = {
  childElement: ReactElement;
};

function ProtectRoute(props: propsProtectRoute) {
  const { isLogin } = HookLoginInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return props.childElement;
}

export default ProtectRoute;
