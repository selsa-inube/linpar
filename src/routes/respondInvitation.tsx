import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { RespondInvitation } from "@pages/respondInvitation";
import { ConfirmationRegisterComplete } from "@pages/respondInvitation/cases/ConfirmationRegisterComplete";
import { ErrorNotAvailable } from "@pages/respondInvitation/cases/ErrorNotAvailable";

const respondInvitationRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/respond-invitation" element={<RespondInvitation />} />
      <Route
        path="confirmation-register-complete/"
        element={<ConfirmationRegisterComplete />}
      />
      <Route path="/*" element={<ErrorNotAvailable />} />
    </>
  )
);
function RespondInvitationRoutesWrapper() {
  return <RouterProvider router={respondInvitationRouter} />;
}
export { RespondInvitationRoutesWrapper };
