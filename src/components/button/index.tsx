import { ButtonProps } from "@mui/material";
import { FC } from "react";
import Button from "@mui/material/Button";

type interfaceButtonStyles = {
  customStyles?: any | {};
};

type Props = ButtonProps & interfaceButtonStyles;

const CustomButton: FC<Props> = (props) => {
  return (
    <Button
      {...props}
      sx={{ backgroundColor: "white", width: 200, ...props.customStyles }}
    ></Button>
  );
};

export default CustomButton;
