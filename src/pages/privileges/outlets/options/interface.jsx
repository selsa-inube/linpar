import { AppMenu } from "../../../../components/layout/AppMenu";

function PrivilegesOptionsUI(props) {
  const { appName, appDescription, appIcon, appOptions, appRoute } = props;

  return (
    <AppMenu
      appName={appName}
      appDescription={appDescription}
      appIcon={appIcon}
      appOptions={appOptions}
      appRoute={appRoute}
    />
  );
}

export { PrivilegesOptionsUI };
