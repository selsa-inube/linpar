import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { MdClose } from "react-icons/md";
import { tokens } from "@design/tokens";
import {
  StyleContainerActions,
  StyledAppCard,
  StyledIconClosed,
} from "./styles";

interface AppCardProps {
  labels: string[];
  icons: (string | JSX.Element)[][];
  url: string;
  showModal: boolean;
  onClose: () => void;
}

function DecisionModalActions(props: AppCardProps) {
  const { labels, icons, url, showModal, onClose } = props;
  console.log(showModal);
  return (
    <StyledAppCard to={url}>
      <Stack direction="column" gap={tokens.spacing.s150}>
        <StyledIconClosed>
          <MdClose size="20px" onClick={onClose} />
        </StyledIconClosed>

        {labels.map((label, index) => (
          <StyleContainerActions key={index}>
            <Stack direction="row" gap={tokens.spacing.s100}>
              {icons[index].map((icon, iconIndex) => (
                <Icon
                  key={iconIndex}
                  icon={icon}
                  appearance="dark"
                  size="15px"
                />
              ))}
            </Stack>
            <Text type="body" size="small">
              {label}
            </Text>
          </StyleContainerActions>
        ))}
      </Stack>
      <Stack justifyContent="flex-end"></Stack>
    </StyledAppCard>
  );
}

export { DecisionModalActions };
export type { AppCardProps };
