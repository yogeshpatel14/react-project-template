import { Box, Button } from "@mui/material";
import { ErrorMessageBox } from "components";
import HookDashboard from "hook/dashboard";
import { ReactElement } from "react";

function Dashboard(): ReactElement {
  const { btnUserListClicked } = HookDashboard();

  return (
    <Box>
      <Button onClick={btnUserListClicked}>User List</Button>
      <ErrorMessageBox
        sx={{
          m: 1,
        }}
        errorMessage="This is success message"
        isError={false}
      />
    </Box>
  );
}

export default Dashboard;
