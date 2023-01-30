import React from "react";
import { Avatar } from "../Avatar";
import { StyledHeader, StyledLogo } from "./styles";
import { MdMenu } from "react-icons/md";
import linparLogo from "../../assets/images/linpar.png";

function Header() {
  return (
    <StyledHeader>
      <MdMenu size={24} />
      <StyledLogo src={linparLogo} alt="LinPar" />
      <Avatar />
    </StyledHeader>
  );
}

export { Header };
