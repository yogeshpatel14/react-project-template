import HookCommonUtils from "hook/common-hook";

function HookLogin() {
  const { isLoading, updateLoadingState } = HookCommonUtils();
  return {
    isLoading,
    updateLoadingState,
  };
}

export default HookLogin;
