import { createContext, useState } from "react";
import linparLogo from "@assets/images/linpar.png";
import { IAppContext, AppContextProviderProps } from "./types";
import { useAuth0 } from "@auth0/auth0-react";

export const AppContext = createContext<IAppContext>({
  user: { username: "", id: "", company: "", operator: { name: "", logo: "" } },
  setClient: () => {},
});

export default function AppContextProvider(props: AppContextProviderProps) {
  const { children } = props;
  const { user } = useAuth0();
  const [client, setClient] = useState({
    id: "",
    name: "",
    sigla: "",
    logo: "",
  });

  const company = client.sigla;

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
    setClient,
  };
  return (
    <AppContext.Provider value={userContext}>{children}</AppContext.Provider>
  );
}
