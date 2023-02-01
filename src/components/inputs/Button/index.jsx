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

function IconButtonMenu(props) {
  const {
    label,
    type = "button",
    disabled = false,
    icon,
    icon2,
    className = "",
  } = props;

  return (
    <StyledButton type={type} disabled={disabled} className={className}>
      {icon}
      {label}
      {icon2}
    </StyledButton>
  );
}

export { Button, IconButton, IconButtonMenu };
