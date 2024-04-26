import { AppContext } from "@context/AppContext";
import { appsConfig } from "@src/components/layout/AppPage/config/apps.config";
import { PrivilegesOptionsUI } from "@pages/privileges/outlets/options/interface";

import { useContext } from "react";

import { privilegeOptionsConfig } from "./config/privileges.config";

function PrivilegesOptions() {
  const { user } = useContext(AppContext);

  const allowedOptions =
    user.company !== "sistemasenlinea"
      ? ["Usuarios linix", "Cargos Linix"]
      : ["Usuarios linix", "Casos de uso Linix", "Roles Linix", "Cargos Linix"];

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
