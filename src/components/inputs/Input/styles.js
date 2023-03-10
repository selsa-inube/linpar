import styled from "styled-components";

import { typography } from "../../../styles/typography";
import { colors } from "../../../styles/colors";

function getGridTemplateColumns(props) {
  let columns = "auto";

  if (props.iconBefore && props.iconAfter) {
    columns = "auto 1fr auto";
  } else if (props.iconBefore) {
    columns = "auto 1fr";
  } else if (props.iconAfter) {
    columns = "1fr auto";
  }

  return columns;
}

function getBorderColor(props) {
  let borderColor = colors.ref.palette.neutral.n40;

  if (props.isInvalid) {
    borderColor = colors.ref.palette.red.r400;
  } else if (props.isDisabled) {
    borderColor = colors.ref.palette.neutral.n60;
  }

  return borderColor;
}

const StyledInputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0px 16px;
  display: grid;
  gap: 8px;
  border-radius: 8px;
  height: ${(props) => (props.size === "compact" ? "40px" : "48px")};
  grid-template-columns: ${getGridTemplateColumns};
  border-style: solid;
  border-color: ${getBorderColor};
  border-width: ${(props) => (props.isInvalid ? "2px" : "1px")};
  background-color: ${colors.ref.palette.neutral.n10};
`;

const StyledInput = styled.input`
  color: ${colors.sys.text.dark};
  font-family: ${typography.sys.typescale.bodyLarge.font};
  font-size: ${typography.sys.typescale.bodyLarge.size};
  font-weight: ${typography.sys.typescale.bodyLarge.weight};
  line-height: ${typography.sys.typescale.bodyLarge.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyLarge.tracking};
  border: none;
  outline: none;
  background-color: inherit;

  ::placeholder {
    color: ${colors.sys.text.secondary};
  }

  &:disabled {
    border: none;
    color: ${colors.sys.text.disabled};
    ::placeholder {
      color: ${colors.sys.text.disabled};
    }
    cursor: not-allowed;
  }
`;

const StyledIcon = styled.i`
  display: flex;
  align-items: center;

  & svg {
    color: ${colors.sys.text.dark};
  }
`;

const StyledLabel = styled.label`
  & p {
    padding: 4px 16px;
  }
`;

const StyledInvalidMessage = styled.div`
  padding: 4px 16px;
  & p {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export {
  StyledInputContainer,
  StyledIcon,
  StyledInput,
  StyledLabel,
  StyledInvalidMessage,
};
