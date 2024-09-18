import { useEffect, useContext, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";
import { getStaffPortalByBusinessManager } from "@services/staffPortal";
import { IStaffPortalByBusinessManager } from "@services/staffPortal/types";
import { Home } from "@pages/home";
import { Login } from "@pages/login";
import AppContextProvider, { AppContext } from "@context/AppContext";
import { GlobalStyles } from "@styles/global";
import { RespondInvitationRoutes } from "./routes/respondInvitation";
import { LoginRoutes } from "./routes/login";
import { PrivilegesRoutes } from "./routes/privileges";
import { PeopleRoutes } from "./routes/people";
import { environment } from "./config/environment";

function LogOut() {
  localStorage.clear();
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: environment.GOOGLE_REDIRECT_URI } });
  return <AppPage />;
}

function FirstPage() {
  const { linparContext } = useContext(AppContext);
  return linparContext.company.length === 0 ? <Login /> : <Home />;
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
  const [portalPublicCode, setPortalPublicCode] = useState<
    IStaffPortalByBusinessManager[]
  >([]);
  const [hasError, setHasError] = useState(false);
  const [hasRedirected, setHasRedirected] = useState(false);

  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const validateConsultation = async () => {
    try {
      const StaffPortalData = await getStaffPortalByBusinessManager();
      setPortalPublicCode(StaffPortalData);
    } catch (error) {
      console.info(error);
      setHasError(true);
    }
  };

  useEffect(() => {
    validateConsultation();
  }, []);

  useEffect(() => {
    if (hasRedirected) return;

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const portalCode = params.get("portal");

    if (portalPublicCode.length > 0) {
      const portalDataFiltered = portalPublicCode.filter(
        (data) => data.staffPortalId === portalCode
      );

      if (portalDataFiltered.length > 0) {
        if (!isLoading && !isAuthenticated) {
          loginWithRedirect();
        } else if (isAuthenticated) {
          setHasRedirected(true);
        } else {
          setHasError(true);
        }
      } else {
        setHasError(true);
      }
    } else {
      setHasError(true);
    }
  }, [
    portalPublicCode,
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    hasRedirected,
  ]);
  if (isLoading) {
    return null;
  }

  if (hasError && !isAuthenticated) {
    return <ErrorPage />;
  }

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
