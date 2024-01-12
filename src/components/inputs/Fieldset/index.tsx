import { Stack, Text, Icon } from "@inube/design-system";
import { StyledFieldset } from "./styles";

interface FieldsetProps {
  title: string;
  children: JSX.Element;
  icon?: JSX.Element;
}

function Fieldset(props: FieldsetProps) {
  const { title, children, icon } = props;

  return (
    <StyledFieldset>
      <legend>
        <Stack padding="s050" alignItems="center">
          <Icon icon={icon} appearance="gray" />
          <Text type="title" size="small" appearance="gray">
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
