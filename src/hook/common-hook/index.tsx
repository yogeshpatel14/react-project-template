import { useState } from "react";

function HookCommonUtils() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const updateLoadingState = () => {
    setIsLoading(!isLoading);
    setErrorMessage("");
  };

  const updateErrorMessageWithStatus = (msg: string, value: boolean) => {
    setErrorMessage(msg);
    setIsLoading(false);
    setIsError(value);
  };

  return {
    isLoading,
    updateLoadingState,
    errorMessage,
    updateErrorMessageWithStatus,
    isError,
  };
}

export default HookCommonUtils;
