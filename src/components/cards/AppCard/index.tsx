import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { SkeletonIcon, SkeletonLine } from "@inubekit/skeleton";

import { tokens } from "@design/tokens";
import { StyledAppCard } from "./styles";

interface AppCardProps {
  description?: string;
  icon?: string | JSX.Element;
  label?: string;
  url?: string;
  loading?: boolean;
}

function AppCard(props: AppCardProps) {
  const { label, description, icon, url, loading } = props;

  return (
    <StyledAppCard to={url || ""}>
      <Stack direction="column" gap={tokens.spacing.s200}>
        {loading ? (
          <Stack width="70%">
            <SkeletonLine animated />
          </Stack>
        ) : (
          <Text type="title" size="medium" weight="bold">
            {label}
          </Text>
        )}
        {loading ? (
          <Stack width="100%">
            <SkeletonLine animated />
          </Stack>
        ) : (
          <Text type="body" size="small">
            {description}
          </Text>
        )}
      </Stack>
      <Stack justifyContent="flex-end">
        {loading ? (
          <Stack justifyContent="flex-end">
            <SkeletonIcon animated />
          </Stack>
        ) : (
          <Icon icon={icon} appearance="dark" size="24px" cursorHover />
        )}
      </Stack>
    </StyledAppCard>
  );
}

export { AppCard };
export type { AppCardProps };
