import { Breadcrumbs, Stack } from "@inube/design-system";
import { PageTitle } from "@components/PageTitle";
import { StyledAppMenu } from "./styles";
import { IRoute } from "./types";

interface AppMenuProps {
  appName: string;
  appDescription: string;
  appRoute: IRoute[];
  children: React.ReactNode;
}

function AppMenu(props: AppMenuProps) {
  const { appName, appDescription, appRoute, children } = props;

  return (
    <StyledAppMenu>
      <Breadcrumbs crumbs={appRoute} />
      <Stack margin="s300 s0 s600 s0">
        <PageTitle
          title={appName}
          description={appDescription}
          navigatePage="/"
        />
      </Stack>
      {children}
    </StyledAppMenu>
  );
}

export { AppMenu };
export type { AppMenuProps };
