import { CircularProgress, CircularProgressProps } from "@mui/material";
import { FC } from "react";

const Spinner: FC<CircularProgressProps> = (props) => {
  return <CircularProgress {...props} size={25} />;
};

export default Spinner;
