import { Stack, Text } from "@inube/design-system";
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
        <Stack gap="8px" padding="4px" alignItems="center">
          {icon}
          <Text typo="titleSmall" appearance={appearance}>
            {title}
          </Text>
        </Stack>
      </legend>
      {children}
    </StyledFieldset>
  );
}

export { Fieldset };
export type { FieldsetProps };
