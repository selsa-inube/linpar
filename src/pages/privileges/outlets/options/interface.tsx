import { AppMenu } from "@components/layout/AppMenu";
import { IAppOption, IRoute } from "@components/layout/AppMenu/types";
import { AppMenuGrid } from "@src/components/layout/AppMenuGrid";

interface PrivilegesOptionsUIProps {
  appName: string;
  appDescription: string;
  appOptions: IAppOption[];
  appRoute: IRoute[];
}

function PrivilegesOptionsUI(props: PrivilegesOptionsUIProps) {
  const { appName, appDescription, appOptions, appRoute } = props;

  return (
    <AppMenu
      appName={appName}
      appDescription={appDescription}
      appOptions={appOptions}
      appRoute={appRoute}
    >
      <AppMenuGrid appOptions={appOptions} />
    </AppMenu>
  );
}

export { PrivilegesOptionsUI };
