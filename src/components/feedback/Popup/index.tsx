import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import { Stack, Text, Icon } from "@inube/design-system";
import { StyledPopup } from "./styles";
import { PopupProps } from "./types";

const Popup = (props: PopupProps) => {
  const { portalId, title, closeModal, children } = props;
  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <StyledPopup>
      <Stack
        width="350px"
        height="500px"
        padding="s300"
        direction="column"
        gap="20px"
      >
        <Stack alignItems="center" justifyContent="space-between">
          <Text type="headline" size="small" appearance="dark">
            {title}
          </Text>
          <Icon
            appearance={"dark"}
            icon={<MdClear />}
            spacing="wide"
            size="24px"
            cursorHover
            onClick={closeModal}
          />
        </Stack>
        {children}
      </Stack>
    </StyledPopup>,
    node
  );
};

export { Popup };
