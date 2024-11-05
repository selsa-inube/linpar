import { Stack, Avatar, inube } from "@inube/design-system";
import { Text } from "@inubekit/text";

interface MenuUserProps {
  userName: string;
  businessUnit?: string;
  avatar?: boolean;
}

function MenuUser(props: MenuUserProps) {
  const { userName, businessUnit = "", avatar = true } = props;

  return (
    <Stack gap={inube.spacing.s150} padding="s150 s200">
      {avatar && (
        <Stack direction="column" justifyContent="center">
          <Avatar />
        </Stack>
      )}
      <Stack direction="column" justifyContent="center">
        <Text type="body" size="medium">
          {userName}
        </Text>
        <Text type="body" size="small" appearance="gray">
          {businessUnit}
        </Text>
      </Stack>
    </Stack>
  );
}

export type { MenuUserProps };
export { MenuUser };
