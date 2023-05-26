import { User, useMediaQuery } from "@inube/design-system";
import { createPortal } from "react-dom";
import { MdMenu } from "react-icons/md";
import {
  StyledHeader,
  StyledIcon,
  StyledLogo,
  StyledMenuWrapper,
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
    handleMenu,
    menu,
    appLogoRedirect = "/",
  } = props;

  return (
    <>
      <StyledHeader>
        <StyledIcon>
          <MdMenu onClick={handleMenu} />
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
      {menu &&
        createPortal(
          <StyledMenuWrapper>
            {/* <Menu
              title="Menu"
              links={appsConfig}
              handleMenu={handleMenu}
              menu={menu}
            /> */}
          </StyledMenuWrapper>,
          document.getElementById("portal")
        )}
    </>
  );
}

export { HeaderUI };
