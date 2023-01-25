import React from "react";
import { Avatar } from "../Avatar";
import { StyledHeader, StyledLogo } from "./styles";
import { FaBars } from "react-icons/fa";
import linparLogo from "../../assets/images/linpar.png";

function Header() {
  return (
    <StyledHeader>
      <FaBars className="menu-icon" size={25} />
      <StyledLogo src={linparLogo} alt="LinPar" />
      <Avatar />
    </StyledHeader>
  );
}

export { Header };
