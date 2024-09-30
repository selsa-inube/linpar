import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react";

import { LinparContext } from "@context/AppContext";

import { CheckingCredentialsUI } from "./interface";
import { IBusinessUnit } from "../../types";

function CheckingCredentials({
  businessUnits,
}: {
  businessUnits: IBusinessUnit[];
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
          const prueba = businessUnits[0];
          const selectJSON = JSON.stringify(prueba);
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
