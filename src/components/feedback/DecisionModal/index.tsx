import { useState } from "react";
import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";

import { TextAppearance } from "@src/types/Text.types";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Blanket } from "@inubekit/blanket";
import { Icon } from "@inubekit/icon";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";

import { StyledModal } from "./styles";

interface DecisionModalProps {
  title: string;
  description: string;
  actionText: string;
  loading?: boolean;
  closeModal: () => void;
  handleClick: () => void;
  appearance?: TextAppearance;
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

  const handleCloseModal = () => {
    closeModal();
    smallScreen && window.location.reload();
  };

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={smallScreen}>
        <Stack
          direction="column"
          gap={smallScreen ? "16px" : "24px"}
          padding={smallScreen ? "24px" : "32px"}
        >
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="title" size={smallScreen ? "small" : "large"}>
              {title}
            </Text>
            <Icon
              icon={<MdClear />}
              appearance="dark"
              size="24px"
              onClick={handleCloseModal}
            />
          </Stack>
          <Text appearance="gray" size={smallScreen ? "medium" : undefined}>
            {description}
          </Text>
          <Stack justifyContent="flex-end" gap="8px">
            <Button
              appearance="gray"
              onClick={handleCloseModal}
              spacing={smallScreen ? "compact" : undefined}
            >
              Cancelar
            </Button>
            <Button
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
