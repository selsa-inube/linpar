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
import { LinparContext, LinparContextProvider } from "@context/AppContext";
import { GlobalStyles } from "@styles/global";
import { Login } from "@pages/login";
import { getStaffPortalByBusinessManager } from "@services/staffPortal";
import { IStaffPortalByBusinessManager } from "@services/staffPortal/types";
import { getBusinessmanagers } from "@services/businessManager";
import { IBusinessmanagers } from "@services/businessManager/types";
import { Home } from "@pages/home";
import { environment } from "@config/environment";
import { encrypt } from "@utils/encrypt";
import { RespondInvitationRoutes } from "@routes/respondInvitation";
import { LoginRoutes } from "@routes/login";
import { PrivilegesRoutes } from "@routes/privileges";
import { PeopleRoutes } from "@routes/people";

function LogOut() {
  localStorage.clear();
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: environment.GOOGLE_REDIRECT_URI } });
  return <AppPage />;
}

function FirstPage() {
  const { linparData } = useContext(LinparContext);
  return linparData.businessUnit.abbreviatedName.length === 0 ? (
    <Login />
  ) : (
    <Home />
  );
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
const portalCode = params.get("portal");

function App() {
  const [portalPublicCode, setPortalPublicCode] = useState<
    IStaffPortalByBusinessManager[]
  >([]);

  const [businessManagers, setBusinessManagers] = useState<IBusinessmanagers>(
    {} as IBusinessmanagers
  );
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

  const portalPublicCodeFiltered = portalPublicCode.filter(
    (data) => data.staffPortalId === portalCode
  );

  const validateBusinessManagers = async () => {
    const foundBusiness = portalPublicCodeFiltered.find(
      (bussines) => bussines
    )?.businessManagerId;

    if (portalPublicCodeFiltered.length > 0 && foundBusiness) {
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
  }, [portalPublicCode]);

  useEffect(() => {
    if (hasRedirected) return;

    if (portalPublicCode.length > 0) {
      if (
        portalPublicCodeFiltered.length > 0 &&
        businessManagers &&
        !isLoading &&
        !isAuthenticated
      ) {
        const encryptedParamValue = encrypt(portalCode!);
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
    <LinparContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </LinparContextProvider>
  );
}

export default App;
