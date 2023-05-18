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
  const { title, closeModal, dataUser } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={smallScreen}>
        <Stack direction="column" gap="16px">
          <Stack alignItems="center" justifyContent="space-between">
            <Text typo="headlineSmall">{title}</Text>
            <MdClear size={24} cursor="pointer" onClick={closeModal} />
          </Stack>
          <TextField
            label="Name"
            name="Name"
            id="Name"
            placeholder="Name"
            isFullWidth={true}
            type="text"
            size="compact"
            value={dataUser.name}
            readonly
          />
          <TextField
            label="Identification"
            name="Identification"
            id="Identification"
            placeholder="Identification"
            isFullWidth={true}
            type="text"
            size="compact"
            value={dataUser.identification}
            readonly
          />
          <TextField
            label="Phone number"
            name="Phone number"
            id="Phone number"
            placeholder="Phone number"
            isFullWidth={true}
            type="text"
            size="compact"
            value={dataUser.phone}
            readonly
          />
          <TextField
            label="Mail"
            name="Mail"
            id="Mail"
            placeholder="Mail"
            isFullWidth={true}
            type="text"
            size="compact"
            value={dataUser.mail}
            readonly
          />
        </Stack>
      </StyledModal>
    </Blanket>,
    document.getElementById("decision")
  );
}

export { InfoModal };
