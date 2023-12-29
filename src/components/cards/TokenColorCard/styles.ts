import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledSubjectSearchCard {
  tokenName: string;
  isActive: boolean;
  smallScreen: boolean;
}

function determineTokenGroup(tokenName: string) {
  for (const category in inube.color.palette) {
    if (Object.hasOwnProperty.call(inube.color.palette[category], tokenName)) {
      return category;
    }
  }
}

const StyledSubjectSearchCard = styled.div<IStyledSubjectSearchCard>`
  width: 100%;
  height: ${({ smallScreen }) => (smallScreen ? "56px" : "auto")};
  box-sizing: border-box;
  border-radius: ${inube.spacing.s100};
  cursor: pointer;
  background-color: ${({ tokenName, theme }) => {
    const category = determineTokenGroup(tokenName);
    return (
      theme?.color?.palette[category!]?.[tokenName] ||
      inube.color.palette[category!]?.[tokenName] ||
      "defaultColor"
    );
  }};
`;

export { StyledSubjectSearchCard };
