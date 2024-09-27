import { AppMenu } from "@components/layout/AppMenu";
import { IRoute } from "@components/layout/AppMenu/types";
import { AppMenuGrid } from "@components/layout/AppMenuGrid";
import { AppMenuCardProps } from "@components/cards/AppMenuCard";

interface CatalogsOptionsUIProps {
  appName: string;
  appDescription: string;
  appOptions: AppMenuCardProps[];
  appRoute: IRoute[];
}

function CatalogsOptionsUI(props: CatalogsOptionsUIProps) {
  const { appName, appDescription, appOptions, appRoute } = props;

  return (
    <AppMenu
      appName={appName}
      appDescription={appDescription}
      appRoute={appRoute}
    >
      <AppMenuGrid appOptions={appOptions} />
    </AppMenu>
  );
}

export { CatalogsOptionsUI };
