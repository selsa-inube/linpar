import { Text } from "@inube/design-system";
import { StyledFieldset } from "./styles";

interface FieldsetProps {
  title: string;
  children: JSX.Element;
  icon?: JSX.Element;
  appearance?: JSX.Element;
}

function Fieldset(props: FieldsetProps) {
  const { title, children, icon, appearance } = props;

  return (
    <StyledFieldset>
      <legend>
        {icon}
        <Text typo="titleSmall" appearance={appearance}>
          {title}
        </Text>
      </legend>
      {children}
    </StyledFieldset>
  );
}

export { Fieldset };
export type { FieldsetProps };
