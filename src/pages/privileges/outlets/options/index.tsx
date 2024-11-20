import { useContext } from "react";
import { decrypt } from "@src/utils/encrypt";
import { useOptionsByBusinessunits } from "@src/hooks/useObject";
import { PrivilegesOptionsUI } from "@pages/privileges/outlets/options/interface";
import { AppsConfig } from "@components/layout/AppPage/config/apps.config";
import { LinparContext } from "@context/AppContext";
import { privilegeOptionsConfig } from "./config/privileges.config";

function PrivilegesOptions() {
  const { appsConfig } = AppsConfig();
  const { businessUnitSigla } = useContext(LinparContext);
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";

  const { subOptions } = useOptionsByBusinessunits(
    staffPortalId,
    businessUnitSigla,
    "gestionprivilegios"
  );

  const catalogsOptions = privilegeOptionsConfig(subOptions).find(
    (item) => item
  );

  return (
    <PrivilegesOptionsUI
      appName={appsConfig[0].label}
      appDescription={appsConfig[0].description}
      appOptions={catalogsOptions}
      appRoute={appsConfig[0].crumbs}
    />
  );
}

export { PrivilegesOptions };
