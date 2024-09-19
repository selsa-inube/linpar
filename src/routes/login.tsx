import { Route, Routes } from "react-router-dom";
import { CheckingCredentials } from "@pages/login/outlets/CheckingCredentials";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { ErrorPage } from "@components/layout/ErrorPage";
import { ErrorNotAvailable } from "@pages/login/errors/ErrorNotAvailable";
import { Login } from "@pages/login";

import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
import { BussinessUnits } from "@pages/login/outlets/bussinessUnits";
import { ErrorNotBussinessUnit } from "@pages/login/errors/ErrorNotBusinessManager";
import { IBusinessUnit } from "@pages/login/types";

export interface IBussinessUnits {
  bussinessUnits: IBusinessUnit[];
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
          path="/:user_id/bussiness-units"
          element={<BussinessUnits bussinessUnits={bussinessUnits} />}
        />
        <Route path="loading-app" element={<LoadingApp />} />
      </Route>
      <Route path="error/not-available" element={<ErrorNotAvailable />} />
      <Route
        path="error/not-related-bussiness-units"
        element={<ErrorNotBussinessUnit />}
      />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { LoginRoutes };
