import React from "react";
import { Avatar } from "../Avatar";
import { StyledHeader, StyledLogo, IconMenu } from "./styles";
import linparLogo from "../../assets/images/linpar.png";

function Header() {
  return (
    <StyledHeader>
      <IconMenu size={24} />
      <StyledLogo src={linparLogo} alt="LinPar" />
      <Avatar />
    </StyledHeader>
  );
}

export { Header };
