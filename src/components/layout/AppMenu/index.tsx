import { AppMenuCard } from "@components/cards/AppMenuCard/index";
import { Breadcrumbs, Grid, useMediaQuery } from "@inube/design-system";
import { PageTitle } from "../../PageTitle";
import { StyledAppMenu, StyledTitle } from "./styles";
import { IAppOption, IRoute } from "./types";

interface AppMenuProps {
  appName: string;
  appDescription: string;
  appOptions: IAppOption[];
  appRoute: IRoute[];
}

function AppMenu(props: AppMenuProps) {
  const { appName, appDescription, appOptions, appRoute } = props;

  const screenMovil = useMediaQuery("(max-width: 490px)");
  console.log(screenMovil);
  return (
    <StyledAppMenu>
      <Breadcrumbs crumbs={appRoute} />
      <StyledTitle>
        <PageTitle
          title={appName}
          description={appDescription}
          navigatePage="/"
        />
      </StyledTitle>

      <Grid
        templateColumns={
          screenMovil ? "1fr" : "repeat(auto-fill,minmax(auto, 159px))"
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
