import { StyledFormContainer } from "./styles";

function FormContainer(props) {
  const { children } = props;

  return <StyledFormContainer> {children} </StyledFormContainer>;
}

export { FormContainer };
