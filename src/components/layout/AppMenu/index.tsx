import { AppMenuCard } from "@components/cards/AppMenuCard/index";
import { Breadcrumbs } from "@inube/design-system";
import { PageTitle } from "../../PageTitle";
import { StyledAppMenu, StyledCards, StyledTitle } from "./styles";
import { IAppOption } from "./types";

interface AppMenuProps {
  appName: string;
  appDescription: string;
  appOptions: IAppOption[];
  appRoute: string;
}

function AppMenu(props: AppMenuProps) {
  const { appName, appDescription, appOptions, appRoute } = props;

  return (
    <StyledAppMenu>
      <Breadcrumbs route={appRoute} />
      <StyledTitle>
        <PageTitle
          title={appName}
          description={appDescription}
          navigatePage="/"
        />
      </StyledTitle>
      <StyledCards>
        {appOptions.map((item) => (
          <AppMenuCard
            key={item.id}
            icon={item.icon}
            label={item.label}
            description={item.description}
            url={item.url}
          />
        ))}
      </StyledCards>
    </StyledAppMenu>
  );
}

export { AppMenu };
export type { AppMenuProps };
