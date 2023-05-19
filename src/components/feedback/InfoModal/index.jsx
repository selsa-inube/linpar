import React from "react";
import {
  Blanket,
  Stack,
  Text,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import { StyledModal } from "./styles";
import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";

function InfoModal(props) {
  const { title, closeModal, infoData } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={smallScreen}>
        <Stack direction="column" gap="16px">
          <Stack alignItems="center" justifyContent="space-between">
            <Text typo="headlineSmall">{title}</Text>
            <MdClear size={24} cursor="pointer" onClick={closeModal} />
          </Stack>
          {Object.keys(infoData).map((key, index) => (
            <TextField
              key={index}
              label={key}
              name={key}
              id={key}
              placeholder={key}
              value={infoData[key]}
              isFullWidth={true}
              type="text"
              size="compact"
              readonly
            />
          ))}
        </Stack>
      </StyledModal>
    </Blanket>,
    document.getElementById("info")
  );
}

export { InfoModal };
