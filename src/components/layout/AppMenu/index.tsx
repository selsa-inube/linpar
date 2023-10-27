import { AppMenuCard } from "@components/cards/AppMenuCard/index";
import { Breadcrumbs, Grid } from "@inube/design-system";
import { PageTitle } from "../../PageTitle";
import { StyledAppMenu, StyledCards, StyledTitle } from "./styles";
import { IAppMenuProps, IAppOption } from "./types";

interface AppMenuProps {
  appName: string;
  appDescription: string;
  appOptions: IAppOption[];
  appRoute: IAppMenuProps[];
}

function AppMenu(props: AppMenuProps) {
  const { appName, appDescription, appOptions, appRoute } = props;

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
      <StyledCards>
        <Grid templateColumns="" gap="s300">
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
      </StyledCards>
    </StyledAppMenu>
  );
}

export { AppMenu };
export type { AppMenuProps };
