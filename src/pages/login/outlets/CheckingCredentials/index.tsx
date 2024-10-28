import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react";

import { LinparContext } from "@context/AppContext";
import { IBusinessUnitsPortalStaff } from "@services/businessUnitsPortalStaff/types";

import { CheckingCredentialsUI } from "./interface";

function CheckingCredentials({
  businessUnits,
}: {
  businessUnits: IBusinessUnitsPortalStaff[];
}) {
  const navigate = useNavigate();
  const { linparData, setBusinessUnitSigla } = useContext(LinparContext);

  const checkCredentials = useCallback(async () => {
    try {
      if (!linparData) {
        return;
      }

      if (linparData) {
        if (!businessUnits || businessUnits.length === 0) {
          navigate("/login/error/not-related-businessUnits");
        } else if (businessUnits.length === 1) {
          const selectedBusinessUnit = businessUnits[0];
          const selectJSON = JSON.stringify(selectedBusinessUnit);
          businessUnits && setBusinessUnitSigla(selectJSON);

          navigate("/login/loading-app");
        } else {
          navigate(`/login/${linparData.user.userAccount}/businessUnits`);
        }
      } else {
        navigate("/login/error/not-available");
      }
    } catch (error) {
      navigate("/login/error/not-available");
    }
  }, [linparData, navigate, businessUnits]);

  useEffect(() => {
    const timer = setTimeout(checkCredentials, 2000);
    return () => clearTimeout(timer);
  }, [checkCredentials]);

  return <CheckingCredentialsUI />;
}

export { CheckingCredentials };
