import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { GlobalStyles } from "./styles/global";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { AppPage } from "./components/layout/AppPage";
import { CheckingCredentials } from "./pages/login/outlets/CheckingCredentials";
import { Clients } from "./pages/login/outlets/Clients";
import { LoadingApp } from "./pages/login/outlets/LoadingApp";
import { LoginErrorBoundary } from "./pages/login/errors";
import { Privileges } from "./pages/privileges";
import AppContextProvider from "./context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppPage Outlet={<Home></Home>} />} />
      <Route path="privileges" element={<Privileges />} />
      <Route path="login" element={<Login />}>
        <Route path="checking-credentials" element={<CheckingCredentials />} />
        <Route path="clients" element={<Clients />} />
        <Route path="loading-app" element={<LoadingApp />} />
        <Route path="*" element={<LoginErrorBoundary />} />
      </Route>
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
