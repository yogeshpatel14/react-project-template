import { interfaceStyleProps, theme } from "themes/custom-themes";

export const LoginStyles: interfaceStyleProps = {
  styleBtn: {
    backgroundColor: theme.palette.secondary.light,
    textTransform: "capitalize",
    // width: { sx: 70, sm: 90, md: 100, lg: 120, xl: 150 },
    height: 40,
  },
  lblLogin: {
    backgroundColor: theme.palette.primary.main,
  },
};
