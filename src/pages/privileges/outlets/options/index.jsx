import { PrivilegesOptionsUI } from "./interface";
import { mockPrivilegeOptions } from "../../../../mocks/apps/privileges.mock";
import { mockApps } from "../../../../mocks/home/apps.mock";

function PrivilegesOptions() {
  return (
    <PrivilegesOptionsUI
      appName={mockApps[0].label}
      appDescription={mockApps[0].description}
      appIcon={mockApps[0].icon}
      appOptions={mockPrivilegeOptions}
      appRoute={mockApps[0].url}
    />
  );
}

export { PrivilegesOptions };
