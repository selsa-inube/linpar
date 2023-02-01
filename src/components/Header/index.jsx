import React from "react";
import { Avatar } from "../Avatar";
import { StyledHeader, StyledLogo } from "./styles";
import { MdMenu } from "react-icons/md";

function Header(props) {
  const { username, businessName, appLogo, appLogoAlt } = props;
  return (
    <StyledHeader>
      <MdMenu size={24} />
      <StyledLogo src={appLogo} alt={appLogoAlt} />
      <Avatar username={username} businessName={businessName} />
    </StyledHeader>
  );
}

export { Header };
