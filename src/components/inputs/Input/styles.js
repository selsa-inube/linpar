import styled from "styled-components";

import { typography } from "../../../styles/typography";

const StyledIconInput = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  border-radius: 4px;
  background-color: #ebecf0;
`;

const StyledInput = styled.input`
  font-family: ${typography.sys.typescale.bodyLarge.font};
  font-size: ${typography.sys.typescale.bodyLarge.size};
  font-weight: ${typography.sys.typescale.bodyLarge.weight};
  line-height: ${typography.sys.typescale.bodyLarge.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyLarge.tracking};
  border: none;
  outline: none;
  background-color: transparent;
`;

const StyledIcon = styled.i`
  display: flex;
  align-items: center;

  & svg {
    width: 18px;
    height: 18px;
  }
`;

export { StyledIconInput, StyledIcon, StyledInput };
