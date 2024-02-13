import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledNavLinkProps {
  theme?: typeof inube;
  smallScreen: boolean;
}

const StyledBackdropNav = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const StyledNav = styled.div<IStyledNavLinkProps>`
  > div {
    border-radius: 8px;
    border: none;
    width: ${({ smallScreen }) => (smallScreen ? "100%" : "248px")};
  }

  > div > div {
    border-radius: inherit;
    height: 500px;
    border: 1px solid
      ${({ theme }) =>
        theme?.color?.stroke?.divider?.regular ||
        inube.color.stroke.divider.regular};
  }
`;

const StyledContainerNav = styled.div`
  max-width: 520px;
  width: 100%;
`;

export { StyledBackdropNav, StyledNav, StyledContainerNav };
