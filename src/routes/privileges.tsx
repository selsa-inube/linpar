import { Route, Routes } from "react-router-dom";
import { PrivilegesOptions } from "@pages/privileges/outlets/options";
import { Invite } from "@pages/privileges/outlets/users/invite";
import { Users } from "@pages/privileges/outlets/users";
import { Privileges } from "@pages/privileges";
import { ErrorPage } from "@components/layout/ErrorPage";
import { LinixUseCase } from "@pages/privileges/outlets/linixUseCase";
import { Roles } from "@pages/privileges/outlets/roles";
import { AddingLinixUseCase } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case";
import { AddRol } from "@pages/privileges/outlets/roles/add-role";
import { EditRole } from "@pages/privileges/outlets/roles/edit-role";
import { Positions } from "@pages/privileges/outlets/positions";
import { AddPosition } from "@pages/privileges/outlets/positions/add-position";
import { EditCaseLinix } from "@pages/privileges/outlets/linixUseCase/EditModal";
import { EditPosition } from "@pages/privileges/outlets/positions/edit-position";
import { CompleteInvitation } from "@pages/privileges/outlets/users/tabs/invitations/Complete-invitation";
import { EditUsers } from "@pages/privileges/outlets/users/tabs/users/EditUser";

function PrivilegesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Privileges />}>
        <Route path="options" element={<PrivilegesOptions />} />
        <Route path="users" element={<Users />} />
        <Route path="linixUseCase" element={<LinixUseCase />} />
        <Route path="roles" element={<Roles />} />
        <Route path="positions" element={<Positions />} />

        <Route
          path="linixUseCase/adding-linix-use-case"
          element={<AddingLinixUseCase />}
        />
        <Route path="roles/add-role" element={<AddRol />} />

        <Route path="positions/add-position" element={<AddPosition />} />
        <Route path="positions/edit/:position_id" element={<EditPosition />} />

        <Route path="users/invite" element={<Invite />} />
        <Route path="users/edit/:user_id" element={<EditUsers />} />
        <Route path="roles/edit/:rol_id" element={<EditRole />} />

        <Route path="linixUseCase/edit/:user_id" element={<EditCaseLinix />} />
        <Route
          path="users/complete-invitation/:invitation_id"
          element={<CompleteInvitation />}
        />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { PrivilegesRoutes };
