import {
  StyledHeader,
  StyledLogo,
  StyledcontentImg,
  StyledIcon,
  StyledUser,
  StyledMenuWrapper,
} from "./styles";
import { createPortal } from "react-dom";
import { Menu } from "../navigation/Menu";
import { mockApps } from "../../mocks/home/apps.mock";
import { MdMenu } from "react-icons/md";
import { User } from "@inube/design-system/dist/components/data/User";

function HeaderUI(props) {
  const {
    userName,
    businessUnit,
    size,
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
          <User userName={userName} businessUnit={businessUnit} size={size} />
        </StyledUser>
      </StyledHeader>
      {menu &&
        createPortal(
          <StyledMenuWrapper>
            <Menu
              title="Menu"
              links={mockApps}
              handleMenu={handleMenu}
              menu={menu}
            />
          </StyledMenuWrapper>,
          document.getElementById("portal")
        )}
    </>
  );
}

export { HeaderUI };
