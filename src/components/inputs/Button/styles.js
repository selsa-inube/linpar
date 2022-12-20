import styled from "styled-components";

import { typography } from "../../../styles/typography";

const StyledButton = styled.button`
  padding: 8px 16px;
  color: white;
  background-color: #0052cc;
  border: none;
  border-radius: 4px;
  font-family: ${typography.sys.typescale.bodyMedium.font};
  font-size: ${typography.sys.typescale.bodyMedium.size};
  font-weight: ${typography.sys.typescale.bodyMedium.weight};
  line-height: ${typography.sys.typescale.bodyMedium.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyMedium.tracking};
  cursor: pointer;
`;

export { StyledButton };
