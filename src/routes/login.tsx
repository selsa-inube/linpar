import { Route, Routes } from "react-router-dom";
import { CheckingCredentials } from "@pages/login/outlets/CheckingCredentials";
import { BusinessUnits } from "@src/pages/login/outlets/BusinessUnit";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { ErrorPage } from "@components/layout/ErrorPage";
import { ErrorNotAvailable } from "@pages/login/errors/ErrorNotAvailable";
import { ErrorNotBusinessUnit } from "@pages/login/errors/ErrorNotBusinessUnit";
import { Login } from "@pages/login";

import { IBusinessUnit } from "@pages/login/types";

import { useContext } from "react";
import { LinparContext } from "@src/context/AppContext";

export interface IBusinessUnits {
  businessUnits: IBusinessUnit[];
}
function LoginRoutes() {
  const { businessUnitsToTheStaff } = useContext(LinparContext);
  const business = businessUnitsToTheStaff;

  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route
          path="/:user_id/checking-credentials"
          element={<CheckingCredentials businessUnits={business} />}
        />
        <Route
          path="/:user_id/businessUnits"
          element={<BusinessUnits businessUnits={business} />}
        />
        <Route path="loading-app" element={<LoadingApp />} />
      </Route>
      <Route path="error/not-available" element={<ErrorNotAvailable />} />
      <Route
        path="error/not-related-businessUnits"
        element={<ErrorNotBusinessUnit />}
      />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { LoginRoutes };
