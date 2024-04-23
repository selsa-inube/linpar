import { PrivilegesOptionsUI } from "./interface";
import { privilegeOptionsConfig } from "./config/privileges.config";
import { useContext } from "react";
import { AppContext } from "@src/context/AppContext";
import { appsConfig } from "@src/components/layout/AppPage/config/apps.config";
function PrivilegesOptions() {
  const { user } = useContext(AppContext);

  const allowedOptions =
    user.company !== "sistemasenlinea"
      ? ["Usuarios", "Cargos"]
      : ["Usuarios", "Casos de uso Linix", "Roles", "Cargos"];

  const filteredOptions = privilegeOptionsConfig.filter((option) =>
    allowedOptions.includes(option.label)
  );

  return (
    <PrivilegesOptionsUI
      appName={appsConfig[0].label}
      appDescription={appsConfig[0].description}
      appOptions={filteredOptions}
      appRoute={appsConfig[0].crumbs}
    />
  );
}

export { PrivilegesOptions };
