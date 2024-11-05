import { Stack } from "@inubekit/stack";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
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
      <Stack margin="24px 0px 48px 0px">
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
