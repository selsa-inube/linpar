import { AppMenuCard } from "@components/cards/AppMenuCard/index";
import { Breadcrumbs, Grid, Stack, useMediaQuery } from "@inube/design-system";
import { PageTitle } from "../../PageTitle";
import { StyledAppMenu } from "./styles";
import { IAppOption, IRoute } from "./types";

interface AppMenuProps {
  appName: string;
  appDescription: string;
  appOptions: IAppOption[];
  appRoute: IRoute[];
}

function AppMenu(props: AppMenuProps) {
  const { appName, appDescription, appOptions, appRoute } = props;

  const screenMovil = useMediaQuery("(max-width: 360px)");

  return (
    <StyledAppMenu>
      <Breadcrumbs crumbs={appRoute} />
      <Stack margin="s400 s0">
        <PageTitle
          title={appName}
          description={appDescription}
          navigatePage="/"
        />
      </Stack>

      <Grid
        templateColumns={
          screenMovil ? "1fr" : "repeat(auto-fill,minmax(auto, 205px))"
        }
        autoRows="auto"
        gap="s300"
      >
        {appOptions.map((item) => (
          <AppMenuCard
            key={item.id}
            icon={item.icon}
            label={item.label}
            description={item.description}
            url={item.url}
          />
        ))}
      </Grid>
    </StyledAppMenu>
  );
}

export { AppMenu };
export type { AppMenuProps };
