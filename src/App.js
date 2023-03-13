import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { GlobalStyles } from "./styles/global";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { CheckingCredentials } from "./pages/login/outlets/CheckingCredentials";
import { Clients } from "./pages/login/outlets/Clients";
import { LoadingApp } from "./pages/login/outlets/LoadingApp";
import { Privileges } from "./pages/privileges";
import { ErrorPage } from "./components/layout/ErrorPage";
import { ErrorNotAvailable } from "./pages/login/errors/ErrorNotAvailable";
import { ErrorNotClient } from "./pages/login/errors/ErrorNotClient";
import { PrivilegesOptions } from "./pages/privileges/outlets/options";
import { Invite } from "./pages/privileges/outlets/users/invite";
import AppContextProvider from "./context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="privileges" element={<Privileges />}>
        <Route path="options" element={<PrivilegesOptions />} />
        <Route path="users/invite" element={<Invite />} />
      </Route>
      <Route path="login" element={<Login />}>
        <Route path="checking-credentials" element={<CheckingCredentials />} />
        <Route path="clients" element={<Clients />} />
        <Route path="loading-app" element={<LoadingApp />} />
      </Route>
      <Route path="login/*" element={<ErrorPage />} />
      <Route
        path="login/error/not-related-clients"
        element={<ErrorNotClient />}
      />
      <Route path="login/error/not-available" element={<ErrorNotAvailable />} />
    </>
  )
);

function App() {
  return (
    <AppContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
