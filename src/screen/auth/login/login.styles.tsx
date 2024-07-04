import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const LoginStyles = makeStyles((theme: Theme) =>
  createStyles({
    lblLogin: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export { LoginStyles };
