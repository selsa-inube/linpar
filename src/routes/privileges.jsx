import { Route, Routes } from "react-router-dom";
import { PrivilegesOptions } from "../pages/privileges/outlets/options";
import { Invite } from "../pages/privileges/outlets/users/invite";
import { Users } from "../pages/privileges/outlets/users";
import { Privileges } from "../pages/privileges";

function PrivilegesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Privileges />}>
        <Route path="options" element={<PrivilegesOptions />} />
        <Route path="users" element={<Users />} />
        <Route path="users/invite" element={<Invite />} />
      </Route>
    </Routes>
  );
}

export { PrivilegesRoutes };
