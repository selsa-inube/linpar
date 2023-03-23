import { Route } from "react-router-dom";
import { PrivilegesOptions } from "../pages/privileges/outlets/options";
import { Invite } from "../pages/privileges/outlets/users/invite";
import { Users } from "../pages/privileges/outlets/users";

function PrivilegesRoutes() {
  return (
    <>
      <Route path="options" element={<PrivilegesOptions />} />
      <Route path="users" element={<Users />} />
      <Route path="users/invite" element={<Invite />} />
    </>
  );
}

export { PrivilegesRoutes };
