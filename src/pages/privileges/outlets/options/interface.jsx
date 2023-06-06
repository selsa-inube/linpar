import { AppMenu } from "@components/layout/AppMenu";

function PrivilegesOptionsUI(props) {
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
