import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react";

import { LinparContext } from "@context/AppContext";
import { IClient } from "@context/AppContext/types";

import { CheckingCredentialsUI } from "./interface";

function CheckingCredentials({ clients }: { clients: IClient[] }) {
  const navigate = useNavigate();
  const { linparData } = useContext(LinparContext);

  const checkCredentials = useCallback(async () => {
    try {
      if (!linparData) {
        return;
      }

      if (linparData) {
        if (!clients || clients.length === 0) {
          navigate("/login/error/not-related-clients");
        } else if (clients.length === 1) {
          navigate("/login/loading-app");
        } else {
          navigate(`/login/${linparData.user.id}/clients`);
        }
      } else {
        navigate("/login/error/not-available");
      }
    } catch (error) {
      navigate("/login/error/not-available");
    }
  }, [linparData, navigate, clients]);

  useEffect(() => {
    const timer = setTimeout(checkCredentials, 2000);
    return () => clearTimeout(timer);
  }, [checkCredentials]);

  return <CheckingCredentialsUI />;
}

export { CheckingCredentials };
