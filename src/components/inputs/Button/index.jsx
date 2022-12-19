import { StyledButton } from "./styles";

function Button(props) {
  const { label, type = "button", disabled = false } = props;

  return (
    <StyledButton type={type} disabled={disabled}>
      {label}
    </StyledButton>
  );
}

export { Button };
