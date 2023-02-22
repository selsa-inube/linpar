import { StyledButton } from "./styles";
import { Text } from "../../data/Text";

function Button(props) {
  const {
    type = "text",
    disabled = false,
    children,
    appearance,
    iconBefore,
    spacing,
    handleClick,
  } = props;

  return (
    <StyledButton
      type={type}
      disabled={disabled}
      appearance={appearance}
      spacing={spacing}
      handleClick={handleClick}
    >
      {iconBefore}
      <Text typoToken="labelLarge" colorToken="light">
        {children}
      </Text>
    </StyledButton>
  );
}

export { Button };
