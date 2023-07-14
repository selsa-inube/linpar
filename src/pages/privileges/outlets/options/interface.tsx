import { AppMenu } from "@components/layout/AppMenu";
import { IAppOption } from "@src/components/layout/AppMenu/types";

interface PrivilegesOptionsProps {
  appName: string;
  appDescription: string;
  appOptions: IAppOption[];
  appRoute: string;
}

function PrivilegesOptionsUI(props: PrivilegesOptionsProps) {
  const { appName, appDescription, appOptions, appRoute } = props;

  return (
    <AppMenu
      appName={appName}
      appDescription={appDescription}
      appOptions={appOptions}
      appRoute={appRoute}
    />
  );
}

export { PrivilegesOptionsUI };
