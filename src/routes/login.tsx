import { Route, Routes } from "react-router-dom";
import { CheckingCredentials } from "@pages/login/outlets/CheckingCredentials";
import { BusinessUnits } from "@src/pages/login/outlets/BusinessUnit";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { ErrorPage } from "@components/layout/ErrorPage";
import { ErrorNotAvailable } from "@pages/login/errors/ErrorNotAvailable";
import { ErrorNotClient } from "@src/pages/login/errors/ErrorNotBusinessUnit";
import { Login } from "@pages/login";

import { IBusinessUnit } from "@pages/login/types";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";

export interface IBusinessUnits {
  businessUnits: IBusinessUnit[];
}
function LoginRoutes() {
  const businessUnits = businessUnitDataMock;
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route
          path="/:user_id/checking-credentials"
          element={<CheckingCredentials businessUnits={businessUnits} />}
        />
        <Route
          path="/:user_id/businessUnits"
          element={<BusinessUnits businessUnits={businessUnits} />}
        />
        <Route path="loading-app" element={<LoadingApp />} />
      </Route>
      <Route path="error/not-available" element={<ErrorNotAvailable />} />
      <Route
        path="error/not-related-businessUnits"
        element={<ErrorNotClient />}
      />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { LoginRoutes };
