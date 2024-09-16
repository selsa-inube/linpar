import { createContext, useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import linparLogo from "@assets/images/linpar.png";
import { IBusinessmanagers } from "@services/businessManager/types";
import { IStaffPortalByBusinessManager } from "@services/staffPortal/types";
import { decrypt } from "@src/utils/encrypt";
import { validateBusinessManagers, validateConsultation } from "./utils";
import { ILinparContext, ILinparData } from "./types";

const LinparContext = createContext<ILinparContext>({} as ILinparContext);

interface LinparProviderProps {
  children: React.ReactNode;
}

function LinparProvider(props: LinparProviderProps) {
  const { children } = props;
  const { user } = useAuth0();
  const [portalData, setPortalData] = useState<IStaffPortalByBusinessManager[]>(
    []
  );
  const [businessManagers, setBusinessManagers] = useState<IBusinessmanagers>(
    {} as IBusinessmanagers
  );

  const [clientSigla, setClientSigla] = useState(
    localStorage.getItem("clientSigla") || ""
  );

  useEffect(() => {
    localStorage.setItem("clientSigla", clientSigla);
  }, [clientSigla]);

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
      company: clientSigla,
      operator: { name: "Linpar", logo: linparLogo },
    },
  });

  const portalId = localStorage.getItem("portalCode");
  let portalCode = "";
  if (portalId) {
    portalCode = decrypt(portalId);
  }

  useEffect(() => {
    validateConsultation().then((data) => {
      setPortalData(data);
    });
  }, []);

  useEffect(() => {
    const portalDataFiltered = portalData.filter(
      (data) => data.staffPortalId === portalCode
    );
    const foundBusiness = portalDataFiltered.find(
      (bussines) => bussines
    )?.businessManagerId;

    if (portalDataFiltered.length > 0 && foundBusiness) {
      validateBusinessManagers(foundBusiness).then((data) => {
        setBusinessManagers(data);
      });
    }
  }, [portalData]);

  useEffect(() => {
    if (!businessManagers) return;
    setLinparData((prev) => ({
      ...prev,
      abbreviatedName: businessManagers.abbreviatedName || "",
      businessManagerId: businessManagers.businessManagerId || "",
      publicCode: businessManagers.publicCode || "",
      urlBrand: businessManagers.urlBrand || "",
      urlLogo: businessManagers.urlLogo || "",
    }));
  }, [businessManagers]);

  const linparContext = useMemo(
    () => ({
      linparData,
      clientSigla,
      setLinparData,
      setClientSigla,
    }),
    [linparData, clientSigla, setLinparData, setClientSigla]
  );

  return (
    <LinparContext.Provider value={linparContext}>
      {children}
    </LinparContext.Provider>
  );
}

export { LinparContext, LinparProvider };
export type { LinparProviderProps };
