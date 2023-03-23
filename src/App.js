import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { GlobalStyles } from "./styles/global";
import { Home } from "./pages/home";
import { Privileges } from "./pages/privileges";
import { ErrorPage } from "./components/layout/ErrorPage";
import { PrivilegesOptions } from "./pages/privileges/outlets/options";
import { Invite } from "./pages/privileges/outlets/users/invite";
import { Users } from "./pages/privileges/outlets/users";
import AppContextProvider from "./context";
import { LoginRoutes } from "./routes/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="privileges" element={<Privileges />}>
        <Route path="options" element={<PrivilegesOptions />} />
        <Route path="users" element={<Users />} />
        <Route path="users/invite" element={<Invite />} />
      </Route>
      <Route path="login*" element={<LoginRoutes />} />
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
