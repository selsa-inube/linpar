import { Stack, Text, Icon } from "@inube/design-system";
import { StyledFieldset } from "./styles";

interface FieldsetProps {
  title: string;
  children: JSX.Element;
  icon?: JSX.Element;
  appearance?: string;
}

function Fieldset(props: FieldsetProps) {
  const { title, children, icon, appearance } = props;

  return (
    <StyledFieldset>
      <legend>
        <Stack gap="8px" padding="s050" alignItems="center">
          <Icon icon={icon} appearance="dark" />
          <Text type="title" size="small" appearance={appearance}>
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
