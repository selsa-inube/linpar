import styled from "styled-components";

import { typography } from "../../../styles/typography";
import { colors } from "../../../styles/colors";

function getGridTemplateColumns(props) {
  if (props.iconAfter) {
    return "1fr auto";
  } else if (props.iconBefore) {
    return "auto 1fr";
  } else {
    return "auto";
  }
}

function getBorderStyle(props) {
  let borderWidth = "1px";
  let borderColor = colors.ref.palette.neutral.n300;

  if (props.isInvalid) {
    borderWidth = "2px";
    borderColor = colors.ref.palette.red.r400;
  }

  if (props.isDisabled) {
    borderColor = colors.ref.palette.neutral.n60;
  }

  return `${borderWidth} solid ${borderColor}`;
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
  border: ${getBorderStyle};
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
  background-color: transparent;

  &:disabled {
    border: none;
    color: ${colors.sys.text.disabled};
    ::placeholder {
      color: ${(props) =>
        props.disabled ? colors.sys.text.disabled : colors.sys.text.secondary};
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
