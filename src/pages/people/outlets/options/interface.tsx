import { AppMenu } from "@components/layout/AppMenu";
import { IAppOption, IRoute } from "@components/layout/AppMenu/types";

interface PeopleOptionsUIProps {
  appName: string;
  appDescription: string;
  appOptions: IAppOption[];
  appRoute: IRoute[];
}

function PeopleOptionsUI(props: PeopleOptionsUIProps) {
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

export { PeopleOptionsUI };
