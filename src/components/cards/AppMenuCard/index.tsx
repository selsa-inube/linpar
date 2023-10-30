import { Stack, Text, Icon } from "@inube/design-system";
import { StyledAppMenuCard } from "./styles";

interface AppMenuCardProps {
  icon: JSX.Element;
  label: string;
  description: string;
  url: string;
}

function AppMenuCard(props: AppMenuCardProps) {
  const { icon, label, description, url } = props;
  return (
    <Stack direction="column">
      <StyledAppMenuCard to={url}>
        <Stack gap="4px" alignItems="center" direction="column">
          <Icon
            appearance="dark"
            cursorHover={true}
            icon={icon}
            spacing="wide"
            size="24px"
            shape="circle"
          />
          <Stack gap="4px" direction="column" width="100%">
            <Text textAlign="center" type="title" size="medium">
              {label}
            </Text>
            <Text textAlign="center" size="small" appearance="gray">
              {description}
            </Text>
          </Stack>
        </Stack>
      </StyledAppMenuCard>
    </Stack>
  );
}

export { AppMenuCard };
export type { AppMenuCardProps };
