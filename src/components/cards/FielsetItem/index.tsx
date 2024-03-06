import { Stack, Text, useMediaQuery } from "@inube/design-system";
import { StyledFielsetItem } from "./styles";

interface FielsetItemProps {
  id: string;
  name: string;
}

export function FielsetItem(props: FielsetItemProps) {
  const { id, name } = props;

  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <StyledFielsetItem>
      <Stack direction="column" gap="s050">
        <Text type="label" size="medium">
          {id}
        </Text>
        <Text size={mobile ? "small" : "medium"}>{name}</Text>
      </Stack>
    </StyledFielsetItem>
  );
}
