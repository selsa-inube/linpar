import styled from "styled-components";
import { inube } from "@inube/design-system";
import { StrokeAppearance } from "../../types";

interface IStyledLinkFormProps {
  $appearance: StrokeAppearance;
  $category: string;
}

const StyledLinkContainer = styled.div<IStyledLinkFormProps>`
  > label > a {
    color: ${({ $appearance, $category, theme }) =>
      theme?.color?.stroke?.[$appearance]?.[$category] ||
      inube?.color?.stroke?.[$appearance]?.[$category]};
  }
`;

export { StyledLinkContainer };
