import { createContext, useState, useEffect } from "react";
import linparLogo from "@assets/images/linpar.png";
import { IAppContext, AppContextProviderProps } from "./types";
import { useAuth0 } from "@auth0/auth0-react";
import Cookie from "js-cookie";
import { IClient } from "./types";

export const AppContext = createContext<IAppContext>({
  user: { username: "", id: "", company: "", operator: { name: "", logo: "" } },
  handleClientChange: () => {},
});

export default function AppContextProvider(props: AppContextProviderProps) {
  const { children } = props;
  const { user } = useAuth0();
  const [clientInfo, setClientInfo] = useState({
    id: "",
    name: "",
    logo: "",
  });
  const [clientSigla, setClientSigla] = useState(
    Cookie.get("clientSigla") || ""
  );

  function handleClientChange(client: IClient) {
    const { id, name, logo, sigla } = client;
    setClientInfo({ id, name, logo });
    setClientSigla(sigla);
  }

  useEffect(() => {
    Cookie.set("clientSigla", clientSigla);
  }, [clientSigla]);

  const company = clientSigla;

  const userContext: IAppContext = {
    user: {
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
