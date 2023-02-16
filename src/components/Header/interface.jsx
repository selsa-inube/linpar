import { Avatar } from "../Avatar";
import { StyledHeader, StyledLogo, StyledIcon } from "./styles";
import { MdMenu, MdClose } from "react-icons/md";

function HeaderUI(props) {
  const { username, businessName, appLogo, appLogoAlt, handleMenu, menu } =
    props;

  return (
    <StyledHeader>
      <StyledIcon size={24}>
        {menu ? (
          <MdClose onClick={handleMenu} />
        ) : (
          <MdMenu onClick={handleMenu} />
        )}
      </StyledIcon>
      <StyledLogo src={appLogo} alt={appLogoAlt} />
      <Avatar username={username} businessName={businessName} />
    </StyledHeader>
  );
}

export { HeaderUI };
