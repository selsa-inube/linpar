import {
  Blanket,
  Stack,
  Text,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import React from "react";
import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import { StyledModal } from "./styles";

function InteractiveModal(props) {
  const { title, closeModal, infoData, actions } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const hasActions = actions && actions.length > 0;

  console.log(Object.keys(infoData));

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={smallScreen}>
        <Stack direction="column" gap="16px">
          <Stack alignItems="center" justifyContent="space-between">
            <Text typo="headlineSmall">{title}</Text>
            <MdClear size={24} cursor="pointer" onClick={closeModal} />
          </Stack>
          {hasActions && <Text typo="titleMedium">Información</Text>}
          {Object.keys(infoData).map((key, id) => (
            <TextField
              key={id}
              label={key}
              name={key}
              id={key}
              placeholder={key}
              /* value={infoData[key]} */
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
                {action.content(infoData)}
                <Text typo="labelLarge">{action.actionName}</Text>
              </Stack>
            ))}
          </Stack>
        )}
      </StyledModal>
    </Blanket>,
    document.getElementById("portal")
  );
}

export { InteractiveModal };
