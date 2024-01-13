import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledFieldsetColorCard {
  requireBackground: boolean;
  theme: typeof inube;
}

function getTokenColor(tokenName: string, theme?: typeof inube) {
  const palette = theme?.color?.palette || inube.color.palette;
  for (const category in palette) {
    if (Object.hasOwnProperty.call(palette[category], tokenName)) {
      return palette[category!]?.[tokenName];
    }
  }
}

const StyledTokenColorCardContainer = styled.div<IStyledFieldsetColorCard>`
  width: 100%;
  max-width: ${inube.spacing.s1000};
  & > div {
    width: 100%;
    height: 24px;
    max-width: 80px;

    border: 1px solid
      ${({ theme, requireBackground }) =>
        requireBackground
          ? theme?.color?.stroke?.divider?.regular ||
            inube.color.stroke.divider.regular
          : "unset"};
    & > div {
      justify-content: center;
      padding: 4px;
    }
  }
`;

const StyledPopupContainer = styled.div`
  & > div > div {
    height: 100%;
    width: 100%;
    max-width: 350px;
    max-height: 400px;
  }
`;

const StyledTextWithTokenContainer = styled.div<IStyledFieldsetColorCard>`
  & > div {
    border-radius: ${inube.spacing.s100};
    background-color: ${({ theme, requireBackground }) =>
      requireBackground
        ? theme?.color?.text?.dark?.regular || inube.color.text.dark.regular
        : "unset"};
  }
`;
export {
  StyledTokenColorCardContainer,
  StyledPopupContainer,
  StyledTextWithTokenContainer,
  getTokenColor,
};
