import { Route, Routes } from "react-router-dom";
import { CheckingCredentials } from "@pages/login/outlets/CheckingCredentials";
import { BusinessUnits } from "@src/pages/login/outlets/BusinessUnit";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { ErrorPage } from "@components/layout/ErrorPage";
import { ErrorNotAvailable } from "@pages/login/errors/ErrorNotAvailable";
import { ErrorNotBusinessUnit } from "@pages/login/errors/ErrorNotBusinessUnit";
import { Login } from "@pages/login";

import { IBusinessUnit } from "@pages/login/types";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
import { useContext, useEffect, useState } from "react";
import { LinparContext } from "@src/context/AppContext";

export interface IBusinessUnits {
  businessUnits: IBusinessUnit[];
}
function LoginRoutes() {
  const { linparData } = useContext(LinparContext);
  const [businessUnits, setBusinessUnits] = useState(businessUnitDataMock);

  const businessManagerSelsa = ["selsaLinpar"];

  useEffect(() => {
    if (businessManagerSelsa.includes(linparData.businessManager.publicCode)) {
      setBusinessUnits(
        businessUnitDataMock.filter(
          (businessUnit) => businessUnit.sigla === "sistemasenlinea"
        )
      );
    } else {
      setBusinessUnits(
        businessUnitDataMock.filter((businessUnit) => {
          return businessUnit.sigla !== "sistemasenlinea";
        })
      );
    }
  }, [linparData.businessManager.publicCode]);

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
        element={<ErrorNotBusinessUnit />}
      />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { LoginRoutes };
