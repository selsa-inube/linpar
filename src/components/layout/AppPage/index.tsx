import { Header, Nav, useMediaQuery } from "@inube/design-system";
import { navigationConfig } from "@pages/home/config/apps.config";
import { AppContext } from "@src/context";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
} from "./styles";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function AppPage() {
  const { user } = useContext(AppContext);

  const smallScreen = useMediaQuery("(max-width: 849px)");
  return (
    <StyledAppPage>
      <Header
        portalId="portal"
        navigation={navigationConfig}
        logo={renderLogo(user.operator.logo)}
        logoutPath="/"
        userName={user.username}
        businessUnit={user.company}
        isBusinessUnit
      />
      <StyledContainer smallScreen={smallScreen}>
        {!smallScreen && <Nav navigation={navigationConfig} logoutPath="/" />}

        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </StyledAppPage>
  );
}

export { AppPage };
