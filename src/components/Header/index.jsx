import React from "react";
import { Avatar } from "../Avatar";
import { StyledHeader, StyledLogo } from "./styles";
import { MdMenu, MdClose } from "react-icons/md";

function Header(props) {
  const { username, businessName, appLogo, appLogoAlt, handleMenu, menu } =
    props;

  return (
    <StyledHeader>
      {menu ? (
        <MdClose size={24} onClick={handleMenu} />
      ) : (
        <MdMenu size={24} onClick={handleMenu} />
      )}
      <StyledLogo src={appLogo} alt={appLogoAlt} />
      <Avatar username={username} businessName={businessName} />
    </StyledHeader>
  );
}

export { Header };
