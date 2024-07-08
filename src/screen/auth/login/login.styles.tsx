import { interfaceStyleProps, theme } from "themes/custom-themes";

export const LoginStyles: interfaceStyleProps = {
  styleBtn: {
    backgroundColor: theme.palette.secondary.main,
    textTransform: "capitalize",
    width: { sx: 200, sm: 300, md: 400, lg: 500, xl: 600 },
    height: 100,
  },
  lblLogin: {
    backgroundColor: theme.palette.primary.main,
  },
};
