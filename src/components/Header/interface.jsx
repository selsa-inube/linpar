import { User, useMediaQuery } from "@inube/design-system";
import { createPortal } from "react-dom";
import { MdMenu } from "react-icons/md";
import { appsConfig } from "../../pages/home/config/apps.config";
import { Nav } from "../navigation/Nav";
import {
  StyledHeader,
  StyledIcon,
  StyledLogo,
  StyledNavWrapper,
  StyledUser,
  StyledcontentImg,
} from "./styles";

function HeaderUI(props) {
  const smallScreen = useMediaQuery("(max-width: 450px)");
  const actualSize = smallScreen ? "small" : "large";

  const {
    userName,
    businessUnit,
    appLogo,
    appLogoAlt,
    handleNav,
    nav,
    appLogoRedirect = "/",
  } = props;

  return (
    <>
      <StyledHeader>
        <StyledIcon>
          <MdMenu onClick={handleNav} />
        </StyledIcon>
        <StyledcontentImg to={appLogoRedirect}>
          <StyledLogo src={appLogo} alt={appLogoAlt} />
        </StyledcontentImg>
        <StyledUser>
          <User
            userName={userName}
            businessUnit={businessUnit}
            size={actualSize}
          />
        </StyledUser>
      </StyledHeader>
      {nav &&
        createPortal(
          <StyledNavWrapper>
            <Nav
              title="Menu"
              links={appsConfig}
              handleNav={handleNav}
              menu={nav}
            />
          </StyledNavWrapper>,
          document.getElementById("portal")
        )}
    </>
  );
}

export { HeaderUI };
