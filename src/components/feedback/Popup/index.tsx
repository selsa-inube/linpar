import { MdClear } from "react-icons/md";
import { Stack, Text, Icon } from "@inube/design-system";
import { StyledPopup } from "./styles";
import { PopupProps } from "./types";

const Popup = (props: PopupProps) => {
  const { title, closeModal, children } = props;

  return (
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
    </StyledPopup>
  );
};

export { Popup };
