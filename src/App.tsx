import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { Home } from "@pages/home";
import { GlobalStyles } from "@styles/global";
import AppContextProvider from "@src/context/AppContext";
import { LoginRoutes } from "./routes/login";
import { PrivilegesRoutes } from "./routes/privileges";
import { RespondInvitationRoutes } from "./routes/respondInvitation";
import { PeopleRoutes } from "./routes/people";
import { TokenProvider } from "./context/TokenContext";

function LogOut() {
  const { logout } = useAuth0();
  logout();
  return <Home />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
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
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (!isAuthenticated) {
    return null;
  }
  return (
    <AppContextProvider>
      <TokenProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </TokenProvider>
    </AppContextProvider>
  );
}

export default App;
