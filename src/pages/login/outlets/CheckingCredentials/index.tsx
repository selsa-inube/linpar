import { useNavigate } from "react-router-dom";
import { CheckingCredentialsUI } from "./interface";
import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "@context/AppContext";
import { IBussinessUnit } from "@src/context/AppContext/types";

function CheckingCredentials({
  bussinessUnits,
}: {
  bussinessUnits: IBussinessUnit[];
}) {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  const checkCredentials = useCallback(async () => {
    try {
      if (!user) {
        return;
      }

      if (user) {
        if (!bussinessUnits || bussinessUnits.length === 0) {
          navigate("/login/error/not-related-clients");
        } else if (bussinessUnits.length === 1) {
          navigate("/login/loading-app");
        } else {
          navigate(`/login/${user.id}/clients`);
        }
      } else {
        navigate("/login/error/not-available");
      }
    } catch (error) {
      navigate("/login/error/not-available");
    }
  }, [user, navigate, bussinessUnits]);

  useEffect(() => {
    const timer = setTimeout(checkCredentials, 2000);
    return () => clearTimeout(timer);
  }, [checkCredentials]);

  return <CheckingCredentialsUI />;
}

export { CheckingCredentials };
