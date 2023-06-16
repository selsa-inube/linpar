import { Text } from "@inube/design-system";
import { StyledFieldset } from "./styles";

function Fieldset(props) {
  const { title, children } = props;

  return (
    <StyledFieldset>
      <legend>
        <Text typo="titleSmall">{title}</Text>
      </legend>
      {children}
    </StyledFieldset>
  );
}

export { Fieldset };
