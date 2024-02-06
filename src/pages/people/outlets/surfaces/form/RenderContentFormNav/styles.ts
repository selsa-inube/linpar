import styled from "styled-components";
import { inube } from "@inube/design-system";

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
  smallScreen: boolean;
}

const StyledNav = styled.div<IStyledNavLinkProps>`
  > div {
    border: none;
    width: ${({ smallScreen }) => (smallScreen ? "100%" : "248px")};
  }

  > div > div {
    height: 500px;
    border-radius: 8px;
    border: 1px solid
      ${({ theme }) =>
        theme?.color?.stroke?.divider?.regular ||
        inube.color.stroke.divider.regular};
  }
`;
export { StyledMessageContainer, StyledBackdropNav, StyledNav };
