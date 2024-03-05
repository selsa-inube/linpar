import { Stack, Text } from "@inube/design-system";
import { StyledItem } from "./styles";

interface ItemProps {
  id: string;
  name: string;
}

export function Item(props: ItemProps) {
  const { id, name } = props;
  return (
    <StyledItem>
      <Stack direction="column" gap="s050">
        <Text type="label" size="medium">
          {id}
        </Text>
        <Text type="body" size="medium">
          {name}
        </Text>
      </Stack>
    </StyledItem>
  );
}
