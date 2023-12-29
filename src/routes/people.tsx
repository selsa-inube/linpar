import { Route, Routes } from "react-router-dom";
import { Invite } from "@pages/privileges/outlets/users/invite";
import { EditUser } from "@pages/privileges/outlets/users/edit-user";
import { Users } from "@pages/privileges/outlets/users";
import { ErrorPage } from "@components/layout/ErrorPage";
import { CompleteInvitation } from "@pages/privileges/outlets/users/complete-invitation";
import { PeopleOptions } from "@src/pages/people/outlets/options";
import { People } from "@src/pages/people";

function PeopleRoutes() {
  return (
    <Routes>
      <Route path="/" element={<People />}>
        <Route path="options" element={<PeopleOptions />} />
        <Route path="users" element={<Users />} />
        <Route path="users/invite" element={<Invite />} />
        <Route path="users/edit/:user_id" element={<EditUser />} />
        <Route
          path="users/complete-invitation/:invitation_id"
          element={<CompleteInvitation />}
        />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { PeopleRoutes };
