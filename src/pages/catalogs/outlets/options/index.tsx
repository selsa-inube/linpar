import { CatalogsOptionsUI } from "@pages/catalogs/outlets/options/interface";
import { AppsConfig } from "@components/layout/AppPage/config/apps.config";
import { catalogsOptionsConfig } from "./config/catalogs.config";

function CatalogsOptions() {
  const { appsConfig } = AppsConfig();
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
