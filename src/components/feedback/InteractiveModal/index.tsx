import {
  Blanket,
  Stack,
  Text,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import { StyledActionContainer, StyledModal } from "./styles";
import { IAction, ILabel } from "./types";

interface InteractiveModalProps {
  title: string;
  closeModal: () => void;
  infoData: Record<string, string | number>;
  actions?: IAction[];
  labels?: ILabel[];
}

function InteractiveModal(props: InteractiveModalProps) {
  const { title, closeModal, infoData, actions, labels } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const hasActions = actions && actions.length > 0;

  const hasLabels = labels && labels.length > 0;

  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={smallScreen}>
        <Stack direction="column" gap="24px">
          <Stack direction="column" gap="16px">
            <Stack alignItems="center" justifyContent="space-between">
              <Text typo="headlineSmall">{title}</Text>
              <MdClear size={24} cursor="pointer" onClick={closeModal} />
            </Stack>
            {hasActions && <Text typo="titleMedium">Información</Text>}
            {hasLabels
              ? labels.map(
                  (field, id) =>
                    infoData[field.id] && (
                      <TextField
                        key={id}
                        label={capitalizeFirstLetter(field.titleName)}
                        name={field.id}
                        id={field.id}
                        placeholder={field.titleName}
                        value={infoData[field.id]}
                        isFullWidth={true}
                        type="text"
                        size="compact"
                        readOnly={true}
                      />
                    )
                )
              : Object.keys(infoData).map((key, id) => (
                  <TextField
                    key={id}
                    label={capitalizeFirstLetter(key)}
                    name={key}
                    id={key}
                    placeholder={key}
                    value={infoData[key]}
                    isFullWidth={true}
                    type="text"
                    size="compact"
                    readOnly={true}
                  />
                ))}
          </Stack>
          {hasActions && (
            <Stack direction="column" gap="16px">
              <Text typo="titleMedium">Acciones</Text>
              {actions.map((action) => (
                <Stack key={action.id} gap="10px">
                  <StyledActionContainer>
                    {typeof action.content === "function"
                      ? action.content(infoData)
                      : action.content}
                  </StyledActionContainer>
                  <Text typo="labelLarge" appearance="secondary">
                    {action.actionName}
                  </Text>
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    document.getElementById("portal")!
  );
}

export { InteractiveModal };
export type { InteractiveModalProps };
