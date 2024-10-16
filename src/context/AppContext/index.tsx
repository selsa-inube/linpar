import { createContext, useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IBusinessmanagers } from "@services/businessManager/types";
import { IStaffPortalByBusinessManager } from "@services/staffPortal/types";
import { decrypt } from "@utils/encrypt";
import { validateBusinessManagers, validateConsultation } from "./utils";
import { ILinparContext, ILinparData } from "./types";

const LinparContext = createContext<ILinparContext>({} as ILinparContext);

interface LinparProviderProps {
  children: React.ReactNode;
}

interface BusinessUnit {
  businessUnitPublicCode: string;
  abbreviatedName: string;
  languageId: string;
  urlLogo: string;
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

  let businessUnit: BusinessUnit | null = null;
  try {
    businessUnit = JSON.parse(businessUnitSigla || "{}") as BusinessUnit;
  } catch (error) {
    console.error("Error parsing businessUnitSigla: ", error);
  }

  const [linparData, setLinparData] = useState<ILinparData>({
    portal: {
      abbreviatedName: "",
      staffPortalCatalogId: "",
      businessManagerId: "",
      publicCode: "",
    },
    businessManager: {
      publicCode: "",
      abbreviatedName: "",
      urlBrand: "",
      urlLogo: "",
    },
    businessUnit: {
      businessUnitPublicCode: businessUnit?.businessUnitPublicCode || "",
      abbreviatedName: businessUnit?.abbreviatedName || "",
      languageId: businessUnit?.languageId || "",
      urlLogo: businessUnit?.urlLogo || "",
    },
    user: {
      userAccount: user?.name || "",
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
        publicCode: portalDataFiltered?.publicCode || "",
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

  useEffect(() => {
    localStorage.setItem("businessUnitSigla", businessUnitSigla);

    if (businessUnitSigla) {
      let businessUnit: BusinessUnit | null = null;
      try {
        businessUnit = JSON.parse(businessUnitSigla) as BusinessUnit;
      } catch (error) {
        console.error("Error parsing businessUnitSigla: ", error);
        return;
      }

      setLinparData((prev) => ({
        ...prev,
        businessUnit: {
          ...prev.businessUnit,
          abbreviatedName: businessUnit?.abbreviatedName || "",
          businessUnitPublicCode: businessUnit?.businessUnitPublicCode || "",
          languageId: businessUnit?.languageId || "",
          urlLogo: businessUnit?.urlLogo || "",
        },
      }));
    }
  }, [businessUnitSigla]);

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
