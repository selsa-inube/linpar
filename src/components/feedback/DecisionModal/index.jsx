import {
  Blanket,
  Button,
  Stack,
  Text,
  useMediaQuery,
} from "@inube/design-system";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import { StyledModal } from "./styles";

function DecisionModal(props) {
  const {
    title,
    description,
    appearance,
    actionText,
    closeModal,
    handleConfirm,
  } = props;
  const [isLoading, setIsLoading] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const handleIsLoading = () => {
    setIsLoading(true);
  };

  const onConfirm = () => {
    handleIsLoading();
    setTimeout(() => {
      closeModal();
      handleConfirm();
    }, 1000);
  };

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={smallScreen}>
        <Stack direction="column" gap={smallScreen ? "16px" : "24px"}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text typo={smallScreen ? "titleSmall" : "titleLarge"}>
              {title}
            </Text>
            <MdClear size={24} cursor="pointer" onClick={closeModal} />
          </Stack>
          <Text
            appearance="secondary"
            typo={smallScreen ? "bodyMedium" : undefined}
          >
            {description}
          </Text>
          <Stack justifyContent="flex-end" gap="8px">
            <Button
              appearance="secondary"
              handleClick={closeModal}
              spacing={smallScreen ? "compact" : undefined}
            >
              Cancel
            </Button>
            <Button
              appearance={appearance}
              isLoading={isLoading}
              spacing={smallScreen ? "compact" : undefined}
              handleClick={onConfirm}
            >
              {actionText}
            </Button>
          </Stack>
        </Stack>
      </StyledModal>
    </Blanket>,
    document.getElementById("decision")
  );
}

export { DecisionModal };
