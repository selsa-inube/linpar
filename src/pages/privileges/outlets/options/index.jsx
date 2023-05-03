import { PrivilegesOptionsUI } from "./interface";
import { mockPrivilegeOptionsConfig } from "../config/privileges.config";
import { mockAppsConfig } from "../../../home/config/apps.config";

function PrivilegesOptions() {
  return (
    <PrivilegesOptionsUI
      appName={mockAppsConfig[0].label}
      appDescription={mockAppsConfig[0].description}
      appIcon={mockAppsConfig[0].icon}
      appOptions={mockPrivilegeOptionsConfig}
      appRoute={mockAppsConfig[0].url}
    />
  );
}

export { PrivilegesOptions };
