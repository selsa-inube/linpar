import {
  StyledAppMenu,
  StyledTitle,
  StyledCards,
  StyledBreadcrumbs,
} from "./styles";
import { PageTitle } from "../../PageTitle";
import { AppMenuCard } from "../../../components/cards/AppMenuCard/index";
import { Text } from "../../data/Text";

function AppMenu(props) {
  const { appName, appDescription, appIcon, appOptions } = props;

  return (
    <StyledAppMenu>
      <StyledBreadcrumbs>
        <Text typoToken="labelLarge">home / privileges</Text>
      </StyledBreadcrumbs>
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
