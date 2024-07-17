import { AlertProps } from "@mui/material";
import Alert from "@mui/material/Alert";
import { FC, useEffect, useState } from "react";

type interfaceErrorMessage = {
  errorMessage: string | "";
  isError?: boolean | false;
};

type Props = AlertProps & interfaceErrorMessage;

const ErrorMessageBox: FC<Props> = (props) => {
  const [message, setMessage] = useState<string>("");
  const { errorMessage, isError } = props;

  useEffect(() => {
    setMessage(errorMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  return message.length > 0 ? (
    <Alert variant="filled" severity={isError ? "error" : "success"} {...props}>
      {message}
    </Alert>
  ) : (
    <></>
  );
};

export default ErrorMessageBox;
