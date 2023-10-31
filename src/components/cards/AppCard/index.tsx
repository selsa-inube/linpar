import { Stack, Text, Icon } from "@inube/design-system";

import { StyledAppCard } from "./styles";
import { useState } from "react";

interface AppCardProps {
  label: string;
  description: string;
  icon: JSX.Element;
  url: string;
}

function AppCard(props: AppCardProps) {
  const { label, description, icon, url } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledAppCard
      to={url}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack gap="16px" direction="column">
        <Text type="title" size="medium">
          {label}
        </Text>
        <Text size="small">{description}</Text>
      </Stack>
      <Stack alignItems="flex-end" direction="column">
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
  );
}

export { AppCard };
export type { AppCardProps };
