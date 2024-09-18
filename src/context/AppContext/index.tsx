import { createContext, useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IBusinessmanagers } from "@services/businessManager/types";
import { IStaffPortalByBusinessManager } from "@services/staffPortal/types";
import { decrypt } from "@src/utils/encrypt";
import { validateBusinessManagers, validateConsultation } from "./utils";
import { ILinparContext, ILinparData } from "./types";

const LinparContext = createContext<ILinparContext>({} as ILinparContext);

interface LinparProviderProps {
  children: React.ReactNode;
}

function LinparContextProvider(props: LinparProviderProps) {
  const { children } = props;
  const { user } = useAuth0();
  const [portalData, setPortalData] = useState<IStaffPortalByBusinessManager[]>(
    []
  );
  const [businessManagers, setBusinessManagers] = useState<IBusinessmanagers>(
    {} as IBusinessmanagers
  );

  const [businessUnitSigla, setBusinessUnitSigla] = useState(
    localStorage.getItem("businessUnitSigla") || ""
  );

  useEffect(() => {
    localStorage.setItem("businessUnitSigla", businessUnitSigla);
  }, [businessUnitSigla]);

  const [linparData, setLinparData] = useState<ILinparData>({
    portal: {
      abbreviatedName: "",
      staffPortalCatalogId: "",
      businessManagerId: "",
    },
    businessManager: {
      publicCode: "",
      abbreviatedName: "",
      urlBrand: "",
      urlLogo: "",
    },
    businessUnit: {
      publicCode: "",
      abbreviatedName: businessUnitSigla,
      businessUnit: "",
      urlLogo: "",
    },
    user: {
      userAccount: "abc123",
      userName: user?.name || "",
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

    const portalDataFiltered = portalData.find(
      (data) => data.staffPortalId === portalCode
    );
    setLinparData((prev) => ({
      ...prev,
      portal: {
        ...prev.portal,
        abbreviatedName: portalDataFiltered?.abbreviatedName || "",
        staffPortalCatalogId: portalDataFiltered?.staffPortalId || "",
        businessManagerId: portalDataFiltered?.businessManagerId || "",
      },
      businessManager: {
        ...prev.businessManager,
        publicCode: businessManagers.publicCode || "",
        abbreviatedName: businessManagers.abbreviatedName || "",
        urlBrand: businessManagers.urlBrand || "",
        urlLogo: businessManagers.urlLogo || "",
      },
    }));
  }, [businessManagers]);

  const linparContext = useMemo(
    () => ({
      linparData,
      businessUnitSigla,
      setLinparData,
      setBusinessUnitSigla,
    }),
    [linparData, businessUnitSigla, setLinparData, setBusinessUnitSigla]
  );

  return (
    <LinparContext.Provider value={linparContext}>
      {children}
    </LinparContext.Provider>
  );
}

export { LinparContext, LinparContextProvider };
export type { LinparProviderProps };
