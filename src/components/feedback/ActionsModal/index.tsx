import { MdClose } from "react-icons/md";
import { Stack } from "@inubekit/stack";
import { tokens } from "@design/tokens";
import { IAction, IEntry } from "@components/data/TableLinpar/types";
import {
  StyleContainerActions,
  StyledAppCard,
  StyledIconClosed,
} from "./styles";

interface ActionsModalProps {
  actions: IAction[];
  entry: IEntry;
  onClose: () => void;
}

function ActionsModal(props: ActionsModalProps) {
  const { entry, actions, onClose } = props;

  return (
    <StyledAppCard>
      <Stack direction="column" gap={tokens.spacing.s150}>
        <StyledIconClosed>
          <MdClose size="20px" onClick={onClose} />
        </StyledIconClosed>
        {actions.map((action, index) => (
          <StyleContainerActions key={index}>
            <Stack direction="row" gap={tokens.spacing.s100}>
              {action.content(entry)}
            </Stack>
          </StyleContainerActions>
        ))}
      </Stack>
      <Stack justifyContent="flex-end"></Stack>
    </StyledAppCard>
  );
}

export { ActionsModal };
