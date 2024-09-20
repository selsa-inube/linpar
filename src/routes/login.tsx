import { Route, Routes } from "react-router-dom";
import { CheckingCredentials } from "@pages/login/outlets/CheckingCredentials";
import { Clients } from "@src/pages/login/outlets/BusinessUnit";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { ErrorPage } from "@components/layout/ErrorPage";
import { ErrorNotAvailable } from "@pages/login/errors/ErrorNotAvailable";
import { ErrorNotClient } from "@pages/login/errors/ErrorNotClient";
import { Login } from "@pages/login";
import { clientsDataMock } from "@mocks/login/clients.mock";
import { IBusinessUnit } from "@pages/login/types";

export interface IClients {
  clients: IBusinessUnit[];
}
function LoginRoutes() {
  const clients = clientsDataMock;
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route
          path="/:user_id/checking-credentials"
          element={<CheckingCredentials clients={clients} />}
        />
        <Route
          path="/:user_id/clients"
          element={<Clients clients={clients} />}
        />
        <Route path="loading-app" element={<LoadingApp />} />
      </Route>
      <Route path="error/not-available" element={<ErrorNotAvailable />} />
      <Route path="error/not-related-clients" element={<ErrorNotClient />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { LoginRoutes };
