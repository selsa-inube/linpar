import { Route, Routes } from "react-router-dom";
import { PrivilegesOptions } from "@pages/privileges/outlets/options";
import { Invite } from "@pages/privileges/outlets/users/invite";
import { Users } from "@pages/privileges/outlets/users";
import { Privileges } from "@pages/privileges";
import { ErrorPage } from "@components/layout/ErrorPage";
import { Positions } from "@pages/privileges/outlets/positions";
import { AddPosition } from "@pages/privileges/outlets/positions/add-position";
import { EditPosition } from "@pages/privileges/outlets/positions/edit-position";
import { CompleteInvitation } from "@pages/privileges/outlets/users/tabs/invitations/Complete-invitation";
import { EditUsers } from "@pages/privileges/outlets/users/tabs/users/EditUser";

function PrivilegesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Privileges />}>
        <Route path="options" element={<PrivilegesOptions />} />
        <Route path="users" element={<Users />} />
        <Route path="positions" element={<Positions />} />
        <Route path="positions/add-position" element={<AddPosition />} />
        <Route path="positions/edit/:k_Grupo" element={<EditPosition />} />

        <Route path="users/invite" element={<Invite />} />
        <Route path="users/edit/:k_Usuari" element={<EditUsers />} />

        <Route
          path="users/complete-invitation/:invitationId"
          element={<CompleteInvitation />}
        />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { PrivilegesRoutes };
