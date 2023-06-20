import { StyledInfo } from "./styles";
import { Stack, Text, Button, useMediaQuery } from "@inube/design-system";

interface ItemNotFoundProps {
  image: string;
  title: string;
  description: string;
  buttonDescription: string;
  route: string;
}

function ItemNotFound(props: ItemNotFoundProps) {
  const { image, title, description, buttonDescription, route } = props;
  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <Stack
      direction="column"
      gap={smallScreen ? "24px" : "32px"}
      alignItems="center"
      margin="40px"
    >
      <img src={image} alt="ItemNotFoundAlt" />
      <StyledInfo>
        <Stack direction="column" gap={smallScreen ? "8px" : "24px"}>
          <Text typo={smallScreen ? "titleSmall" : "titleLarge"} align="center">
            {title}
          </Text>
          <Text
            typo={smallScreen ? "bodySmall" : "titleMedium"}
            align="center"
            appearance="secondary"
          >
            {description}
          </Text>
        </Stack>
      </StyledInfo>
      <Button type="link" variant="none" spacing="compact" path={route}>
        {buttonDescription}
      </Button>
    </Stack>
  );
}

export { ItemNotFound };
export type { ItemNotFoundProps };
