import { PrivilegesOptionsUI } from "./interface";
import { privilegeOptionsConfig } from "./config/privileges.config";
import { appsConfig } from "@components/layout/AppPage/config/apps.config";

function PrivilegesOptions() {
  return (
    <PrivilegesOptionsUI
      appName={appsConfig[0].label}
      appDescription={appsConfig[0].description}
      appOptions={privilegeOptionsConfig}
      appRoute={appsConfig[0].crumbs}
    />
  );
}

export { PrivilegesOptions };
