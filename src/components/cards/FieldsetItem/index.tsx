import { Stack, Text, useMediaQuery } from "@inube/design-system";
import { StyledFieldsetItem } from "./styles";

interface FieldsetItemProps {
  id: string;
  name: string;
}

export function FieldsetItem(props: FieldsetItemProps) {
  const { id, name } = props;

  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <StyledFieldsetItem>
      <Stack direction="column" gap="s050">
        <Text type="label" size="medium">
          {id}
        </Text>
        <Text size={mobile ? "small" : "medium"}>{name}</Text>
      </Stack>
    </StyledFieldsetItem>
  );
}
