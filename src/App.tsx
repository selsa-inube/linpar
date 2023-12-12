import { useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { ErrorPage } from "@components/layout/ErrorPage";
import { Home } from "@pages/home";
import { GlobalStyles } from "@styles/global";
import AppContextProvider from "./context";
import { LoginRoutes } from "./routes/login";
import { PrivilegesRoutes } from "./routes/privileges";
import { RespondInvitationRoutes } from "./routes/respondInvitation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="login/*" element={<LoginRoutes />} />
      <Route path="privileges/*" element={<PrivilegesRoutes />} />
      <Route
        path="respond-invitation/:client_id/:invitation_id/*"
        element={<RespondInvitationRoutes />}
      />
    </>
  )
);

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  if (isLoading) {
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
