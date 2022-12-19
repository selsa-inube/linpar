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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login />}>
      <Route path="checking-credentials" element={<CheckingCredentials />} />
      <Route path="clients" element={<Clients />} />
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
