import { appsConfig } from "@components/layout/AppPage/config/apps.config";
import { CatalogsOptionsUI } from "@pages/catalogs/outlets/options/interface";
import { catalogsOptionsConfig } from "./config/catalogs.config";

function CatalogsOptions() {
  return (
    <CatalogsOptionsUI
      appName={appsConfig[1].label}
      appDescription={appsConfig[1].description}
      appOptions={catalogsOptionsConfig}
      appRoute={appsConfig[1].crumbs}
    />
  );
}

export { CatalogsOptions };
