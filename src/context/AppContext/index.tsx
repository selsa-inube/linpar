import { createContext, useState, useEffect } from "react";

import linparLogo from "@assets/images/linpar.png";
import { useAuth0 } from "@auth0/auth0-react";

import { IAppContext, AppContextProviderProps } from "./types";
import { IClient } from "./types";

export const AppContext = createContext<IAppContext>({
  linparContext: {
    username: "",
    id: "",
    company: "",
    operator: { name: "", logo: "" },
  },
  handleClientChange: () => {},
});

export default function AppContextProvider(props: AppContextProviderProps) {
  const { children } = props;
  const { user } = useAuth0();
  const [clientSigla, setClientSigla] = useState(
    localStorage.getItem("clientSigla") || ""
  );

  function handleClientChange(client: IClient) {
    const { sigla } = client;
    setClientSigla(sigla);
  }

  useEffect(() => {
    localStorage.setItem("clientSigla", clientSigla);
  }, [clientSigla]);

  const company = clientSigla;

  const userContext: IAppContext = {
    linparContext: {
      username: `${user?.name}`,
      id: "abc123",
      company: company,
      operator: {
        name: "Linpar",
        logo: linparLogo,
      },
    },
    handleClientChange,
  };
  return (
    <AppContext.Provider value={userContext}>{children}</AppContext.Provider>
  );
}
