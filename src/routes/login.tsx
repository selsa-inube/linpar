import { Route, Routes } from "react-router-dom";
import { CheckingCredentials } from "@pages/login/outlets/CheckingCredentials";

import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { ErrorPage } from "@components/layout/ErrorPage";
import { ErrorNotAvailable } from "@pages/login/errors/ErrorNotAvailable";
import { ErrorNotClient } from "@pages/login/errors/ErrorNotClient";
import { Login } from "@pages/login";

import { IBussinessUnit } from "@context/AppContext/types";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
import { BussinessUnits } from "@pages/login/outlets/Clients";

export interface IBussinessUnits {
  bussinessUnits: IBussinessUnit[];
}
function LoginRoutes() {
  const bussinessUnits = businessUnitDataMock;
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route
          path="/:user_id/checking-credentials"
          element={<CheckingCredentials bussinessUnits={bussinessUnits} />}
        />
        <Route
          path="/:user_id/clients"
          element={<BussinessUnits bussinessUnits={bussinessUnits} />}
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
