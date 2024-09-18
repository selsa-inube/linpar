import { useNavigate } from "react-router-dom";
import { CheckingCredentialsUI } from "./interface";
import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "@context/AppContext";
import { IClient } from "@context/AppContext/types";

function CheckingCredentials({ clients }: { clients: IClient[] }) {
  const navigate = useNavigate();
  const { linparContext } = useContext(AppContext);

  const checkCredentials = useCallback(async () => {
    try {
      if (!linparContext) {
        return;
      }

      if (linparContext) {
        if (!clients || clients.length === 0) {
          navigate("/login/error/not-related-clients");
        } else if (clients.length === 1) {
          navigate("/login/loading-app");
        } else {
          navigate(`/login/${linparContext.id}/clients`);
        }
      } else {
        navigate("/login/error/not-available");
      }
    } catch (error) {
      navigate("/login/error/not-available");
    }
  }, [linparContext, navigate, clients]);

  useEffect(() => {
    const timer = setTimeout(checkCredentials, 2000);
    return () => clearTimeout(timer);
  }, [checkCredentials]);

  return <CheckingCredentialsUI />;
}

export { CheckingCredentials };
