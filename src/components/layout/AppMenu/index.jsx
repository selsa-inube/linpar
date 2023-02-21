import { StyledAppMenu, StyledTitle, StyledCards } from "./styles";
import { PageTitle } from "../../PageTitle";
import { AppMenuCard } from "../../../components/cards/AppMenuCard/index";

import { Breadcrumbs } from "../../navigation/Breadcrumbs";

function AppMenu(props) {
  const { appName, appDescription, appIcon, appOptions, appRoute } = props;

  return (
    <StyledAppMenu>
      <Breadcrumbs route={appRoute} />
      <StyledTitle>
        <PageTitle
          title={appName}
          icon={appIcon}
          description={appDescription}
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
