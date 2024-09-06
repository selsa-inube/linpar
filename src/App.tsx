import { useContext } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";
import AppContextProvider, { AppContext } from "@context/AppContext";
import { GlobalStyles } from "@styles/global";
import { initializeDataDB } from "@mocks/utils/initializeDataDB";
import { useAuth0 } from "@auth0/auth0-react";

import { RespondInvitationRoutes } from "./routes/respondInvitation";
import { LoginRoutes } from "./routes/login";
import { PrivilegesRoutes } from "./routes/privileges";
import { PeopleRoutes } from "./routes/people";

import { environment } from "./config/environment";
import { ConsultationPortal } from "./pages/consultationPortal";
import { ConsultationPortalRoutes } from "./routes/consultationPortal";

function LogOut() {
  localStorage.clear();
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: environment.REDIRECT_URI } });
  return <AppPage />;
}

function FirstPage() {
  const { linparContext } = useContext(AppContext);
  return linparContext.company.length === 0 ? (
    <ConsultationPortal />
  ) : (
    <AppPage />
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<FirstPage />} errorElement={<ErrorPage />} />
      <Route path="login/*" element={<LoginRoutes />} />
      <Route path="consultation/*" element={<ConsultationPortalRoutes />} />
      <Route path="privileges/*" element={<PrivilegesRoutes />} />
      <Route path="people/*" element={<PeopleRoutes />} />
      <Route path="logout" element={<LogOut />} />
      <Route
        path="respond-invitation/:client_id/:invitation_id/*"
        element={<RespondInvitationRoutes />}
      />
    </>
  )
);

function App() {
  initializeDataDB();
  // const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  // useEffect(() => {
  //   // if (!isLoading && !isAuthenticated) {
  //   //   loginWithRedirect();
  //   //   initializeDataDB();
  //   // }
  // }, [isLoading, isAuthenticated, loginWithRedirect]);

  // if (!isAuthenticated) {
  //   return null;
  // }
  return (
    <AppContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
