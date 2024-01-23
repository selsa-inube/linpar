import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledPopup {
  theme?: typeof inube;
}

const StyledPopup = styled.div<IStyledPopup>`
  position: relative;
  & > div {
    position: absolute;
    border-radius: ${inube.spacing.s100};
    background-color: ${({ theme }: IStyledPopup) =>
      theme?.color?.surface?.light?.regular ||
      inube.color.surface.light.regular};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15);
    z-index: 2;
    left: -60px;
    top: 12px;
  }
`;

export { StyledPopup };
