import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";

import { tokens } from "@design/tokens";
import { StyledAppCard } from "./styles";

interface AppCardProps {
  label: string;
  description: string;
  icon: string | JSX.Element;
  url: string;
}

function AppCard(props: AppCardProps) {
  const { label, description, icon, url } = props;

  return (
    <StyledAppCard to={url}>
      <Stack direction="column" gap={tokens.spacing.s200}>
        <Text type="title" size="medium" weight="bold">
          {label}
        </Text>
        <Text type="body" size="small">
          {description}
        </Text>
      </Stack>
      <Stack justifyContent="flex-end">
        <Icon icon={icon} appearance="dark" size="24px" />
      </Stack>
    </StyledAppCard>
  );
}

export { AppCard };
export type { AppCardProps };
