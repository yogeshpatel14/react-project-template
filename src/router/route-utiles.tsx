import { useNavigate } from "react-router-dom";

const UtilsNavigations = () => {
  const navigate = useNavigate();

  const onNavigateWithScreenName = (screenName: string, replace = false) => {
    navigate(screenName, { replace });
  };

  return {
    onNavigateWithScreenName,
  };
};

export default UtilsNavigations;
