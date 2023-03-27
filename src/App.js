import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { GlobalStyles } from "./styles/global";
import { Home } from "./pages/home";
import { ErrorPage } from "./components/layout/ErrorPage";
import { LoginRoutes } from "./routes/login";
import { PrivilegesRoutes } from "./routes/privileges";
import AppContextProvider from "./context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="privileges/*" element={<PrivilegesRoutes />} />
      <Route path="login/*" element={<LoginRoutes />} />
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
