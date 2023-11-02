import { Button, Stack, Text, useMediaQuery } from "@inube/design-system";

interface ItemNotFoundProps {
  image: string;
  title: string;
  description: string;
  buttonDescription: string;
  route: string;
}

function ItemNotFound(props: ItemNotFoundProps) {
  const { image, title, description, buttonDescription, route } = props;
  const smallScreen = useMediaQuery("(max-width: 312px)");

  return (
    <Stack
      direction="column"
      gap={smallScreen ? "24px" : "32px"}
      alignItems="center"
      margin="s400"
    >
      <img src={image} alt="ItemNotFoundAlt" />

      <Stack direction="column" gap={smallScreen ? "8px" : "24px"}>
        <Text
          type="title"
          size={smallScreen ? "small" : "large"}
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          type={smallScreen ? "body" : "title"}
          size={smallScreen ? "small" : "medium"}
          textAlign="center"
          appearance="gray"
        >
          {description}
        </Text>
      </Stack>

      <Button type="link" variant="none" spacing="compact" path={route}>
        {buttonDescription}
      </Button>
    </Stack>
  );
}

export { ItemNotFound };
export type { ItemNotFoundProps };
