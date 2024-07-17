import { ButtonProps } from "@mui/material";
import { FC } from "react";
import Button from "@mui/material/Button";

type Props = ButtonProps;

const CustomButton: FC<Props> = (props) => {
  return <Button {...props}></Button>;
};

export default CustomButton;
