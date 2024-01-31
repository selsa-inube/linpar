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
  > div {
    border: none;
    width: 100%;
  }

  > div > div {
    background: ${({ theme }: IStyledNavLinkProps) =>
      theme?.color?.surface?.nav?.regular ||
      presente.color.surface.nav.regular};
    height: 500px;
    border-radius: 8px;
    border: 1px solid
      ${({ theme }) =>
        theme?.color?.stroke?.divider?.regular ||
        inube.color.stroke.divider.regular};
  }
`;
export { StyledMessageContainer, StyledBackdropNav, StyledNav };
