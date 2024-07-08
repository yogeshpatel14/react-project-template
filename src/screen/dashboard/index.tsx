import { Box, Button } from "@mui/material";
import HookDashboard from "hook/dashboard";
import { ReactElement } from "react";

function Dashboard(): ReactElement {
  const { btnUserListClicked } = HookDashboard();

  return (
    <Box>
      <Button onClick={btnUserListClicked}>User List</Button>
    </Box>
  );
}

export default Dashboard;
