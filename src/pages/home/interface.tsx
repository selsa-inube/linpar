import { useContext } from "react";
import { Header, Stack, Nav, useMediaQueries } from "@inube/design-system";
import { AppContext } from "@src/context";
import {
  StyledContentImg,
  StyledLogo,
} from "@components/layout/AppPage/styles";
import { navigationConfig, logoutConfig } from "./config/apps.config";
import { StyledHome } from "./styles";
import { useNavigate } from "react-router-dom";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function HomeUI() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const [laptop] = Object.values(useMediaQueries(["(min-width: 945px)"]));

  if (user.company.length === 0) {
    navigate(`login/${user.id}/clients`);
  }

  return (
    <>
      <StyledHome>
        <Header
          portalId="portal"
          navigation={navigationConfig}
          logoURL={renderLogo(user.operator.logo)}
          userName={user.username}
          client={user.company}
        />
        <Stack height="calc(100vh - 56px)">
          {laptop && (
            <Nav
              navigation={navigationConfig}
              logoutPath={logoutConfig.logoutPath}
              logoutTitle={logoutConfig.logoutTitle}
            />
          )}
        </Stack>
      </StyledHome>
    </>
  );
}

export { HomeUI };
