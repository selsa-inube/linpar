import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { GlobalStyles } from "./styles/global";
import { Login } from "./pages/login";
import { CheckingCredentials } from "./pages/login/outlets/CheckingCredentials";
import { Clients } from "./pages/login/outlets/Clients";
import { LoadingApp } from "./pages/login/outlets/LoadingApp";
import { LoginErrorBoundary } from "./pages/login/errors";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login />} errorElement={<LoginErrorBoundary />}>
      <Route path="checking-credentials" element={<CheckingCredentials />} />
      <Route path="clients" element={<Clients />} />
      <Route path="loading-app" element={<LoadingApp />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
