import { PrivilegesOptionsUI } from "./interface";
import { privilegeOptionsConfig } from "../options/config/privileges.config";
import { appsConfig } from "../../../home/config/apps.config";

function PrivilegesOptions() {
  return (
    <PrivilegesOptionsUI
      appName={appsConfig[0].label}
      appDescription={appsConfig[0].description}
      appIcon={appsConfig[0].icon}
      appOptions={privilegeOptionsConfig}
      appRoute={appsConfig[0].url}
    />
  );
}

export { PrivilegesOptions };
