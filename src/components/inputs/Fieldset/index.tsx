import { Text } from "@inube/design-system";
import { StyledFieldset } from "./styles";

interface FieldsetProps {
  title: string;
  children: JSX.Element;
}

function Fieldset(props: FieldsetProps) {
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
