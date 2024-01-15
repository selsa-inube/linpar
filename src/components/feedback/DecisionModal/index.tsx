import { useState } from "react";
import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";

import {
  Blanket,
  Button,
  Icon,
  Stack,
  Text,
  useMediaQuery,
} from "@inube/design-system";
import { StyledModal } from "./styles";

interface DecisionModalProps {
  title: string;
  description: string;
  actionText: string;
  loading?: boolean;
  closeModal: () => void;
  handleClick: () => void;
}

function DecisionModal(props: DecisionModalProps) {
  const {
    title,
    description,
    actionText,
    loading = true,
    closeModal,
    handleClick,
  } = props;
  const [isLoading, setIsLoading] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const handleIsLoading = () => {
    setIsLoading(loading);
  };

  const handleConfirmationClick = () => {
    handleIsLoading();

    setTimeout(
      () => {
        closeModal();
        handleClick();
      },
      !loading ? 0 : 1000
    );
  };

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={smallScreen}>
        <Stack
          direction="column"
          gap={smallScreen ? "16px" : "24px"}
          padding={smallScreen ? "s300" : "s400"}
        >
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="title" size={smallScreen ? "small" : "large"}>
              {title}
            </Text>
            <Icon
              icon={<MdClear />}
              appearance="dark"
              size="24px"
              onClick={closeModal}
            />
          </Stack>
          <Text appearance="gray" size={smallScreen ? "medium" : undefined}>
            {description}
          </Text>
          <Stack justifyContent="flex-end" gap="8px">
            <Button
              appearance="gray"
              onClick={closeModal}
              spacing={smallScreen ? "compact" : undefined}
            >
              Cancel
            </Button>
            <Button
              appearance={"success"}
              loading={isLoading}
              onClick={handleConfirmationClick}
              spacing={smallScreen ? "compact" : undefined}
            >
              {actionText}
            </Button>
          </Stack>
        </Stack>
      </StyledModal>
    </Blanket>,
    document.getElementById("decision")!
  );
}

export { DecisionModal };
export type { DecisionModalProps };
