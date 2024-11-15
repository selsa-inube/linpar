import { CatalogsOptionsUI } from "@pages/catalogs/outlets/options/interface";
import { AppsConfig } from "@components/layout/AppPage/config/apps.config";
import { catalogsOptionsConfig } from "./config/catalogs.config";
import { useContext } from "react";
import { LinparContext } from "@src/context/AppContext";
import { decrypt } from "@src/utils/encrypt";
import { useOptionsByBusinessunits } from "@src/hooks/useObject";

function CatalogsOptions() {
  const { appsConfig } = AppsConfig();

  const { businessUnitSigla } = useContext(LinparContext);
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";

  const { subOptions } = useOptionsByBusinessunits(
    staffPortalId,
    businessUnitSigla,
    "catalogosgeneraleslinix"
  );

  console.log(
    "catalogsOptionsConfig",
    catalogsOptionsConfig(subOptions).find((item) => item)
  );

  return (
    <CatalogsOptionsUI
      appName={appsConfig[1].label}
      appDescription={appsConfig[1].description}
      appOptions={catalogsOptionsConfig(subOptions)}
      appRoute={appsConfig[1].crumbs}
    />
  );
}

export { CatalogsOptions };
