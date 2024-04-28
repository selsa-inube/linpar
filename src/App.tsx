import { useEffect, useContext } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useAuth } from "@inube/auth";

import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";
import AppContextProvider, { AppContext } from "@context/AppContext";
import { GlobalStyles } from "@styles/global";
import { initializeDataDB } from "@mocks/utils/initializeDataDB";

import { RespondInvitationRoutes } from "./routes/respondInvitation";
import { LoginRoutes } from "./routes/login";
import { PrivilegesRoutes } from "./routes/privileges";
import { PeopleRoutes } from "./routes/people";
import { Login } from "./pages/login";

function LogOut() {
  localStorage.clear();
  const { logout } = useAuth();
  logout();
  return <AppPage />;
}

function FirstPage() {
  const { user } = useContext(AppContext);
  return user.company.length === 0 ? <Login /> : <AppPage />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<FirstPage />} errorElement={<ErrorPage />} />
      <Route path="login/*" element={<LoginRoutes />} />
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
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
      initializeDataDB();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (!isAuthenticated) {
    return null;
  }
  return (
    <AppContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
