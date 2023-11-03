import {
  Blanket,
  Button,
  Stack,
  Text,
  useMediaQuery,
} from "@inube/design-system";
import { EAppearance } from "@src/types/colors.types";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import { StyledModal } from "./styles";

interface DecisionModalProps {
  title: string;
  description: string;
  appearance: EAppearance;
  actionText: string;
  loading?: boolean;
  closeModal: () => void;
  handleClick: () => void;
}

function DecisionModal(props: DecisionModalProps) {
  const {
    title,
    description,
    appearance,
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
        <Stack direction="column" gap={smallScreen ? "16px" : "24px"}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="title" size={smallScreen ? "small" : "large"}>
              {title}
            </Text>
            <MdClear size={24} cursor="pointer" onClick={closeModal} />
          </Stack>
          <Text
            appearance="secondary"
            size={smallScreen ? "medium" : undefined}
          >
            {description}
          </Text>
          <Stack justifyContent="flex-end" gap="8px">
            <Button
              appearance="secondary"
              onClick={closeModal}
              spacing={smallScreen ? "compact" : undefined}
            >
              Cancel
            </Button>
            <Button
              appearance={appearance}
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
