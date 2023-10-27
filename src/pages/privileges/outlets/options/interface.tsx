import { AppMenu } from "@components/layout/AppMenu";
import { IAppOption, IAppMenuProps } from "@components/layout/AppMenu/types";

interface PrivilegesOptionsUIProps {
  appName: string;
  appDescription: string;
  appOptions: IAppOption[];
  appRoute: IAppMenuProps[];
}

function PrivilegesOptionsUI(props: PrivilegesOptionsUIProps) {
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
