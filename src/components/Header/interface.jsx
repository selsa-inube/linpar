import { Avatar } from "../Avatar";
import {
  StyledHeader,
  StyledLogo,
  StyledcontentImg,
  StyledIcon,
  StyledMenuWrapper,
} from "./styles";
import { createPortal } from "react-dom";
import { Menu } from "../navigation/Menu";
import { mockApps } from "../../mocks/home/apps.mock";
import { MdMenu } from "react-icons/md";

function HeaderUI(props) {
  const { username, businessName, appLogo, appLogoAlt, handleMenu, menu } =
    props;

  return (
    <>
      <StyledHeader>
        <StyledIcon>
          <MdMenu onClick={handleMenu} />
        </StyledIcon>
        <StyledcontentImg to="/">
          <StyledLogo src={appLogo} alt={appLogoAlt} />
        </StyledcontentImg>
        <Avatar username={username} businessName={businessName} />
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
