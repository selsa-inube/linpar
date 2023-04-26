import {
  Blanket,
  Button,
  Stack,
  Text,
  useMediaQuery,
} from "@inube/design-system";
import { StyledModal } from "./styles";
import { MdClear } from "react-icons/md";
import { useState } from "react";

function DecisionModal(props) {
  const { title, description, appearance, textAction, toggleModal } = props;
  const [isLoading, setIsLoading] = useState(false);

  const isModalResponsive = useMediaQuery("(max-width: 580px)");

  const handleIsLoading = () => {
    setIsLoading(true);
  };

  return (
    <Blanket>
      <StyledModal isModalResponsive={isModalResponsive}>
        <Stack direction="column" gap="24px">
          <Stack alignItems="center" justifyContent="space-between">
            <Text typo={isModalResponsive ? "titleSmall" : "titleLarge"}>
              {title}
            </Text>
            <MdClear size={24} cursor="pointer" onClick={toggleModal} />
          </Stack>
          <Text
            appearance="secondary"
            typo={isModalResponsive ? "bodyMedium" : undefined}
          >
            {description}
          </Text>
          <Stack justifyContent="flex-end" gap="8px">
            <Button
              appearance="secondary"
              handleClick={toggleModal}
              spacing={isModalResponsive ? "compact" : undefined}
            >
              Cancel
            </Button>
            <Button
              appearance={appearance}
              isLoading={isLoading}
              handleClick={handleIsLoading}
              spacing={isModalResponsive ? "compact" : undefined}
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
