import { ServiceUser } from "apis";

function HookDashboard() {
  const btnUserListClicked = () => {
    ServiceUser.apiCallGetUserList({ page: 2 }, true)
      .then((_res: any) => {
        console.log(_res);
      })
      .catch((_err: any) => {});
  };
  return {
    btnUserListClicked,
  };
}

export default HookDashboard;
