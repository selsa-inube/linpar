import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledPopup {
  theme?: typeof inube;
  mobile?: boolean;
  tablet?: boolean;
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
    left: -20px;
    top: 18px;
    div > div {
      overflow-x: hidden;
    }
    div::-webkit-scrollbar {
      width: ${({ tablet }: IStyledPopup) => (tablet ? "4px" : "8px")};
    }
    div::-webkit-scrollbar-track-piece {
      background-color: #ebecf0;
    }
    div::-webkit-scrollbar-thumb {
      height: 154px;
      width: 8px;
      background-color: ${inube.color.palette.neutral.N50};
    }
  }
`;

export { StyledPopup };
