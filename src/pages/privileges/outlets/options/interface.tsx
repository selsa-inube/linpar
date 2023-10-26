import { AppMenu } from "@components/layout/AppMenu";
import { IAppOption, IRoute } from "@src/components/layout/AppMenu/types";
import { IBreadcrumbsProps } from "@inube/design-system";

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
    />
  );
}

export { PrivilegesOptionsUI };
