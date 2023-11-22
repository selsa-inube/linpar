import { useState } from "react";
import { Stack, Text, Icon, useMediaQuery } from "@inube/design-system";

import { StyledAppCard } from "./styles";

interface AppCardProps {
  label: string;
  description: string;
  icon: JSX.Element;
  url: string;
}

function AppCard(props: AppCardProps) {
  const { label, description, icon, url } = props;
  const [isHovered, setIsHovered] = useState(false);

  let screenMovil = useMediaQuery("(max-width: 640px)");

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      width={screenMovil ? "100%" : "250px"}
    >
      <StyledAppCard
        to={url}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Stack
          gap={screenMovil ? "4px" : "16px"}
          direction="column"
          padding={screenMovil ? "s200" : "s300"}
        >
          <Text type="title" size="medium">
            {label}
          </Text>
          <Text size="small">{description}</Text>
        </Stack>
        <Stack
          alignItems="flex-end"
          direction="column"
          padding={screenMovil ? "s50 s200" : "s0 s300"}
        >
          <Icon
            appearance={isHovered ? "primary" : "dark"}
            parentHover={isHovered ? true : false}
            icon={icon}
            spacing="wide"
            size="24px"
            shape="circle"
          />
        </Stack>
      </StyledAppCard>
    </Stack>
  );
}

export { AppCard };
export type { AppCardProps };
