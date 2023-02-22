import styled from "styled-components";

import { typography } from "../../../styles/typography";
import { colors } from "../../../styles/colors";

const StyledButton = styled.button`
  max-width: fit-content;
  display: flex;
  align-items: center;
  padding: ${({ spacing }) =>
    spacing === "compact" ? `4px 12px` : `8px 16px`};
  color: ${colors.ref.palette.neutral.n0};
  background-color: ${colors.sys.actions.primary};
  border: none;
  border-radius: 8px;
  gap: 8px;
  font-family: ${typography.sys.typescale.bodyMedium.font};
  font-size: ${typography.sys.typescale.bodyMedium.size};
  font-weight: ${typography.sys.typescale.bodyMedium.weight};
  line-height: ${typography.sys.typescale.bodyMedium.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyMedium.tracking};
  cursor: pointer;

  &:disabled {
    background-color: ${colors.ref.palette.neutral.n0};
    border: none;
    color: ${colors.ref.palette.neutral.n60};
    cursor: not-allowed;
  }
`;

export { StyledButton };
