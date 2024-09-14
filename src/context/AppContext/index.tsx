import { createContext, useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import linparLogo from "@assets/images/linpar.png";
import { IClient, ILinparContext, ILinparData } from "./types";
import { getBusinessmanagers } from "@services/businessManager";
import { IBusinessmanagers } from "@services/businessManager/types";
import { decrypt } from "@src/utils/encrypt";

const LinparContext = createContext<ILinparContext>({} as ILinparContext);

interface LinparProviderProps {
  children: React.ReactNode;
}

function LinparProvider(props: LinparProviderProps) {
  const { children } = props;
  const { user } = useAuth0();

  const [businessManagers, setBusinessManagers] = useState<IBusinessmanagers>(
    {} as IBusinessmanagers
  );

  const [clientSigla, setClientSigla] = useState(
    localStorage.getItem("clientSigla") || ""
  );

  const [linparData, setLinparData] = useState<ILinparData>({
    abbreviatedName: "",
    staffPortalCatalogId: "",
    businessManagerId: "",
    publicCode: "",
    urlBrand: "",
    urlLogo: "",
    user: {
      username: user?.name || "",
      id: user?.id || "abc123",
      company: "",
      operator: { name: "Linpar", logo: linparLogo },
    },
    handleClientChange: () => {},
  });

  const portalId = localStorage.getItem("portalCode");
  let portalCode = "";
  if (portalId) {
    portalCode = decrypt(portalId);
  }

  const validateBusinessManagers = async () => {
    if (!portalCode) {
      return;
    }
    try {
      const newData = await getBusinessmanagers(portalCode);
      setBusinessManagers(newData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    validateBusinessManagers();
  }, []);

  useEffect(() => {
    localStorage.setItem("clientSigla", clientSigla);
  }, [clientSigla]);

  function handleClientChange(client: IClient) {
    const { sigla } = client;
    setClientSigla(sigla);
  }

  useEffect(() => {
    setLinparData((prev) => ({
      ...prev,
      abbreviatedName: businessManagers.abbreviatedName || "",
      businessManagerId: businessManagers.businessManagerId || "",
      publicCode: businessManagers.publicCode || "",
      company: "sistemasenlinea",
      urlBrand: businessManagers.urlBrand || "",
      urlLogo: "hola",
      handleClientChange,
    }));
  }, [businessManagers]);

  const linparContext = useMemo(
    () => ({
      linparData,
      setLinparData,
      setClientSigla,
    }),
    [linparData, setLinparData, setClientSigla]
  );

  return (
    <LinparContext.Provider value={linparContext}>
      {children}
    </LinparContext.Provider>
  );
}

export { LinparContext, LinparProvider };
export type { LinparProviderProps };
