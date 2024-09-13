import { createContext, useState, useEffect } from "react";

import linparLogo from "@assets/images/linpar.png";
import { useAuth0 } from "@auth0/auth0-react";

import { IAppContext, AppContextProviderProps, IBussinessUnit } from "./types";

export const AppContext = createContext<IAppContext>({
  user: { username: "", id: "", company: "", operator: { name: "", logo: "" } },
  handleBussinessUnitChange: () => {},
});

export default function AppContextProvider(props: AppContextProviderProps) {
  const { children } = props;
  const { user } = useAuth0();
  const [BussinessUnitSigla, setBussinessUnitSigla] = useState(
    localStorage.getItem("BussinessUnitSigla") || ""
  );

  function handleBussinessUnitChange(BussinessUnit: IBussinessUnit) {
    const { sigla } = BussinessUnit;
    setBussinessUnitSigla(sigla);
  }

  useEffect(() => {
    localStorage.setItem("BussinessUnitSigla", BussinessUnitSigla);
  }, [BussinessUnitSigla]);

  const company = BussinessUnitSigla;

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
    handleBussinessUnitChange,
  };
  return (
    <AppContext.Provider value={userContext}>{children}</AppContext.Provider>
  );
}
