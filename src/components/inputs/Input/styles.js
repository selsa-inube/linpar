import styled from "styled-components";

import { typography } from "../../../styles/typography";
import { colors } from "../../../styles/colors";

const StyledInputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => (props.size === "compact" ? "40px" : "48px")};
  padding: 0px 16px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.iconAfter ? "1fr auto" : props.iconBefore ? "auto 1fr" : "auto"};
  gap: 8px;
  border-radius: 8px;
  border: ${(props) => (props.isInvalid ? "2px" : "1px")} solid
    ${(props) =>
      props.isDisabled
        ? colors.ref.palette.neutral.n60
        : props.isInvalid
        ? colors.ref.palette.red.r400
        : colors.ref.palette.neutral.n300};
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
    aling-content: center;
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
