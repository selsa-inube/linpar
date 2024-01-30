import styled from "styled-components";
import { inube, presente } from "@inube/design-system";

const StyledMessageContainer = styled.div`
  position: fixed;
  bottom: 18px;
  right: 75px;
  z-index: 2;
`;

const StyledBackdropNav = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
interface IStyledNavLinkProps {
  theme?: typeof inube;
}

const StyledNav = styled.div`
  > div > div {
    background: ${({ theme }: IStyledNavLinkProps) =>
      theme?.color?.palette?.teal?.t400 || presente.color.palette.teal.t400};
  }
`;
export { StyledMessageContainer, StyledBackdropNav, StyledNav };
