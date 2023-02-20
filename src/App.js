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
import AppContextProvider from "./context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Home />}
        errorElement={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              fontFamily: "Roboto,sans-serif",
            }}
          >
            <h2
              style={{
                color: "#091E42",
                fontWeight: "400",
              }}
            >
              Oops! Esta ruta no se encuentra disponible
            </h2>
            <h5
              style={{
                color: "#5E6C84",
                fontWeight: "400",
                width: "30%",
                textAlign: "center",
              }}
            >
              Si usaste una tarjeta, trabajamos para que la puedas usar pronto.
              De lo contrario, verifica la ruta que intentas acceder.
            </h5>
          </div>
        }
      />
      <Route path="privileges" element={<Privileges />} />
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
