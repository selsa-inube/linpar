import { Avatar } from "../Avatar";

import { StyledHeader, StyledLogo } from "./styles";

import linparLogo from "../../assets/images/linpar.png";

function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={linparLogo} alt="LinPar" />
      <Avatar />
    </StyledHeader>
  );
}

export { Header };
