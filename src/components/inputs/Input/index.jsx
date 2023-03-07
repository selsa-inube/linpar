import { MdError } from "react-icons/md";
import {
  StyledInputContainer,
  StyledIcon,
  StyledInput,
  StyledLabel,
  StyledInvalidMessage,
} from "./styles";
import { Text } from "../../data/Text";

function Input(props) {
  const {
    label,
    placeholder,
    isDisabled = false,
    type = "text",
    value,
    handleChange,
    iconBefore,
    iconAfter,
    isRequired = false,
    isInvalid,
    errorMessage,
    size,
  } = props;

  return (
    <>
      {label && (
        <StyledLabel>
          <Text
            typoToken="labelLarge"
            colorToken={isDisabled ? "disabled" : isInvalid ? "error" : "dark"}
          >
            {label}
          </Text>
        </StyledLabel>
      )}
      <StyledInputContainer
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        iconAfter={iconAfter}
        iconBefore={iconBefore}
        size={size}
      >
        {iconBefore && <StyledIcon>{iconBefore}</StyledIcon>}
        <StyledInput
          type={type}
          disabled={isDisabled}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          required={isRequired}
        />
        {iconAfter && <StyledIcon>{iconAfter}</StyledIcon>}
      </StyledInputContainer>
      {isInvalid && (
        <StyledInvalidMessage>
          <Text typoToken="bodySmall" colorToken="error">
            <MdError size={14} />({errorMessage})
          </Text>
        </StyledInvalidMessage>
      )}
    </>
  );
}

export { Input };
