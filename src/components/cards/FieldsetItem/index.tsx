import { Stack, Text, useMediaQuery } from "@inube/design-system";
import { StyledFieldsetItem } from "./styles";

interface FieldsetItemProps {
  id: string;
  description: string;
  onClick: () => void;
}

export function FieldsetItem(props: FieldsetItemProps) {
  const { id, description, onClick } = props;

  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <StyledFieldsetItem onClick={onClick}>
      <Stack direction="column" gap="s050">
        <Text type="label" size="medium">
          {id}
        </Text>
        <Text size={mobile ? "small" : "medium"}>{description}</Text>
      </Stack>
    </StyledFieldsetItem>
  );
}
