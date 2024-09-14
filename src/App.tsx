import { useEffect, useContext, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";
import { LinparContext, LinparProvider } from "@context/AppContext";
import { GlobalStyles } from "@styles/global";
import { useAuth0 } from "@auth0/auth0-react";

import { RespondInvitationRoutes } from "./routes/respondInvitation";
import { LoginRoutes } from "./routes/login";
import { PrivilegesRoutes } from "./routes/privileges";
import { PeopleRoutes } from "./routes/people";
import { Login } from "./pages/login";
import { environment } from "./config/environment";
import { getStaffPortalByBusinessManager } from "./services/staffPortal";
import { IStaffPortalByBusinessManager } from "./services/staffPortal/types";
import { getBusinessmanagers } from "./services/businessManager";
import { IBusinessmanagers } from "./services/businessManager/types";
import { encrypt } from "./utils/encrypt";

function LogOut() {
  localStorage.clear();
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: environment.REDIRECT_URI } });
  return <AppPage />;
}

function FirstPage() {
  const { linparData } = useContext(LinparContext);
  return linparData.user.company.length === 0 ? <Login /> : <AppPage />;
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

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const paramValue = params.get("portal");

function App() {
  const [portalData, setPortalData] = useState<IStaffPortalByBusinessManager[]>(
    []
  );
  const [businessManagers, setBusinessManagers] = useState<IBusinessmanagers>(
    {} as IBusinessmanagers
  );
  const [hasError, setHasError] = useState(false);
  const [hasRedirected, setHasRedirected] = useState(false);

  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const validateConsultation = async () => {
    try {
      const newData = await getStaffPortalByBusinessManager();
      setPortalData(newData);
    } catch (error) {
      console.info(error);
      setHasError(true);
    }
  };

  useEffect(() => {
    validateConsultation();
  }, []);

  const portalDataFiltered = portalData.filter(
    (data) => data.staffPortalId === paramValue
  );

  const validateBusinessManagers = async () => {
    const foundBusiness = portalDataFiltered.find(
      (bussines) => bussines
    )?.businessManagerId;

    if (portalDataFiltered.length > 0 && foundBusiness) {
      try {
        const newData = await getBusinessmanagers(foundBusiness);
        setBusinessManagers(newData);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    } else {
      console.error();
    }
  };

  useEffect(() => {
    validateBusinessManagers();
  }, [portalData]);

  useEffect(() => {
    if (hasRedirected) return;

    if (portalData.length > 0) {
      if (
        portalDataFiltered.length > 0 &&
        businessManagers &&
        !isLoading &&
        !isAuthenticated
      ) {
        const encryptedParamValue = encrypt(paramValue!);
        localStorage.setItem("portalCode", encryptedParamValue);
        loginWithRedirect();
      } else if (isAuthenticated) {
        setHasRedirected(true);
      } else {
        setHasError(true);
      }
    } else {
      setHasError(true);
    }
  }, [
    businessManagers,
    portalData,
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
    <LinparProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </LinparProvider>
  );
}

export default App;
