import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import {
  Stack,
  Text,
  Blanket,
  useMediaQuery,
  Textfield,
} from "@inube/design-system";
import { StyledModal } from "./styles";
import { InteractiveModalProps } from "./types";

const InteractiveModal = ({
  portalId,
  title,
  closeModal,
  infoData,
  actions = [],
  labels = [],
  infoTitle,
  actionsTitle,
}: InteractiveModalProps) => {
  const smallScreen = useMediaQuery("(max-width: 580px)");
  const hasActions = actions.length > 0;
  const hasLabels = labels.length > 0;
  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={smallScreen}>
        <Stack direction="column" gap="24px">
          <Stack direction="column" gap="16px">
            <Stack alignItems="center" justifyContent="space-between">
              <Text type="headline" size="small" appearance="dark">
                {title}
              </Text>
              <MdClear size={24} cursor="pointer" onClick={closeModal} />
            </Stack>
            {hasActions && (
              <Text type="title" size="medium" appearance="dark">
                {infoTitle}
              </Text>
            )}
            {hasLabels
              ? labels.map(
                  (field) =>
                    infoData[field.id] && (
                      <Textfield
                        key={field.id}
                        label={field.titleName}
                        name={field.id}
                        id={field.id}
                        placeholder={field.titleName}
                        value={infoData[field.id]}
                        fullwidth={true}
                        type="text"
                        size="compact"
                        readOnly={true}
                      />
                    )
                )
              : Object.keys(infoData).map((key, index) => (
                  <Textfield
                    key={index}
                    label={key}
                    name={key}
                    id={key}
                    placeholder={key}
                    value={infoData[key]}
                    fullwidth={true}
                    type="text"
                    size="compact"
                    readOnly={true}
                  />
                ))}
          </Stack>
          {hasActions && (
            <Stack direction="column" gap="16px">
              <Text type="title" size="medium" appearance="dark">
                {actionsTitle}
              </Text>
              {actions.map((action) => (
                <Stack key={action.id} gap="10px">
                  {typeof action.content === "function"
                    ? action.content(infoData)
                    : action.content}
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { InteractiveModal };
