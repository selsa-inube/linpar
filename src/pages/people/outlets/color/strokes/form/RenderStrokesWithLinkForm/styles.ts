import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledLinkFormProps {
  appearance: string;
  category: string;
  theme: typeof inube;
}

const StyledLinkContainer = styled.div`
  > label > a {
    color: ${({ appearance, category, theme }: IStyledLinkFormProps) =>
      theme?.color?.stroke?.[appearance]?.[category] ||
      inube?.color?.stroke?.[appearance]?.[category]};
  }
`;

export { StyledLinkContainer };
