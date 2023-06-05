import React from "react";
import { StyledInfo } from "./styles";
import { Stack, Text, Button, useMediaQuery } from "@inube/design-system";

function ItemNotFound(props) {
  const { image, title, description, buttonDescription, route } = props;
  return (
    <Stack direction="column" gap="32px" alignItems="center">
      <img src={image} alt="ItemNotFoundAlt" />
      <StyledInfo>
        <Stack direction="column" gap="24px" alignItems="center">
          <Text typo="titleLarge">{title}</Text>
          <Text typo="titleMedium" align="center">
            {description}
          </Text>
        </Stack>
      </StyledInfo>
      <Button variant="none" spacing="compact">
        {buttonDescription}
      </Button>
    </Stack>
  );
}

export { ItemNotFound };
