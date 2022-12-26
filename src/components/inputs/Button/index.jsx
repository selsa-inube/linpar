import { StyledButton } from "./styles";

function Button(props) {
  const { label, type = "button", disabled = false } = props;

  return (
    <StyledButton type={type} disabled={disabled}>
      {label}
    </StyledButton>
  );
}

function IconButton(props) {
  const { label, type = "button", disabled = false, icon } = props;

  return (
    <StyledButton type={type} disabled={disabled}>
      {icon}
      {label}
    </StyledButton>
  );
}

export { Button, IconButton };
