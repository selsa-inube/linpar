import { Blanket, Button, Stack, Text } from "@inube/design-system";
import { StyledModal } from "./styles";
import { MdClear } from "react-icons/md";
import { useState } from "react";

function DecisionModal(props) {
  const { title, description, appearance, textAction, toggleModal } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = () => {
    setIsLoading(true);
  };

  return (
    <Blanket>
      <StyledModal>
        <Stack direction="column" gap="24px">
          <Stack alignItems="center" justifyContent="space-between">
            <Text typo="titleLarge">{title}</Text>
            <MdClear size={24} cursor="pointer" onClick={toggleModal} />
          </Stack>
          <Text appearance="secondary">{description}</Text>
          <Stack justifyContent="flex-end" gap="8px">
            <Button appearance="secondary" handleClick={toggleModal}>
              Cancel
            </Button>
            <Button
              appearance={appearance}
              isLoading={isLoading}
              handleClick={handleIsLoading}
            >
              {textAction}
            </Button>
          </Stack>
        </Stack>
      </StyledModal>
    </Blanket>
  );
}

export { DecisionModal };
