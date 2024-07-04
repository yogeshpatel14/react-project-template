import { Box, Button, FormLabel } from "@mui/material";
import { LoginStyles } from "./login.styles";
import { useTranslation } from "react-i18next";
import { onChangeLanguage } from "locals-i18n/index";
import { useAppDispatch } from "store/use-app-dispatch";
import { actionSaveLoginInfo } from "store/reducer/login";
import { useEffect } from "react";
import { useAppSelector } from "store/use-app-selector";
import UtilsNavigations from "router/route-utiles";
import { Spinner } from "components";

function Login(): JSX.Element {
  const classStyles = LoginStyles();
  const { t } = useTranslation("");
  const { loginInfo } = useAppSelector((state) => state.rLogin);
  const dispatch = useAppDispatch();
  const { onNavigateWithScreenName } = UtilsNavigations();

  useEffect(() => {
    console.log("---islogin---", loginInfo);
  }, [loginInfo]);

  const btnLoginClicked: Function = () => {
    dispatch(actionSaveLoginInfo({ userName: "abc", token: "token_1234" }));
  };

  return (
    <Box>
      <FormLabel className={classStyles.lblLogin}>{t("welcome")}</FormLabel>
      <Button onClick={() => onChangeLanguage("es")} variant="contained">
        Change Language (ES)
      </Button>
      <Button onClick={() => onChangeLanguage("en")} variant="contained">
        Change Language (EN)
      </Button>
      <Button onClick={() => btnLoginClicked()} variant="contained">
        Login
      </Button>
      <Button
        onClick={() => onNavigateWithScreenName("/dashboard")}
        variant="contained"
      >
        Dashboard
      </Button>
      <Spinner />
    </Box>
  );
}

export default Login;
