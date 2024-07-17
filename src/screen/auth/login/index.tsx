import { Box, Button, FormLabel } from "@mui/material";
import { LoginStyles } from "./login.styles";
import { useTranslation } from "react-i18next";
import { onChangeLanguage } from "locals-i18n/index";
import { useAppDispatch } from "store/use-app-dispatch";
import { actionSaveLoginInfo } from "store/reducer/login";
import { useEffect, useState } from "react";
import { useAppSelector } from "store/use-app-selector";
import UtilsNavigations from "router/route-utiles";
import { CustomButton, Spinner } from "components";
import { loginObject, typeZLogin } from "interfaces/screen/auth/login";

function Login(): JSX.Element {
  const { t } = useTranslation();
  const { loginInfo } = useAppSelector((state) => state.rLogin);
  const dispatch = useAppDispatch();
  const { onNavigateWithScreenName } = UtilsNavigations();
  const [formValues, setFormValues] = useState<typeZLogin>({
    email: "test@test.com",
    password: "",
  });

  useEffect(() => {
    console.log("---islogin---", loginInfo);
  }, [loginInfo]);

  const btnLoginClicked: Function = () => {
    dispatch(actionSaveLoginInfo({ userName: "abc", token: "token_1234" }));
  };

  return (
    <Box>
      <FormLabel sx={LoginStyles.styleBtn}>{t("welcome")}</FormLabel>
      <Button
        sx={LoginStyles.styleBtn}
        onClick={() => onChangeLanguage("es")}
        variant="contained"
      >
        Change Language (ES)
      </Button>
      <Button onClick={() => onChangeLanguage("en")} variant="contained">
        Change Language (EN)
      </Button>
      <Button
        sx={LoginStyles.styleBtn}
        onClick={() => btnLoginClicked()}
        variant="contained"
      >
        Login
      </Button>
      <Button
        onClick={() => onNavigateWithScreenName("/dashboard")}
        variant="contained"
        sx={{
          height: { sx: 20, sm: 50, md: 80, lg: 100, xlg: 150 },
          backgroundColor: "red",
        }}
      >
        Dashboard
      </Button>
      <CustomButton
        onClick={() => {
          const result = loginObject.safeParse(formValues);
          console.log(result.success);
          console.log(result.error?.format());
          const formatted = result.error?.format();
          console.log(
            formatted?.email ? formatted?.email?._errors[0] : "valid email"
          );
          console.log(formatted?.password?._errors[0]);
        }}
        sx={LoginStyles.styleBtn}
      >
        Custom My Button
      </CustomButton>
      <Spinner />
    </Box>
  );
}

export default Login;
