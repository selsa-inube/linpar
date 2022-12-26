import { Stack } from "../../../components/layout/Stack";
import { Text } from "../../../components/data/Text";
import { IconButton } from "../../../components/inputs/Button";
import { MdChevronLeft } from "react-icons/md";

import {
  StyledErrorBoundary,
  StyledCompanyLogo,
  StyledGrid,
  StyledErrorImage,
} from "./styles";

import selsaLogo from "../../../assets/images/selsa.png";
import errorImage from "../../../assets/images/timeout.png";

function LoginErrorBoundary() {
  return (
    <StyledErrorBoundary>
      <StyledCompanyLogo src={selsaLogo} alt="Sistemas Enlinea" />
      <StyledGrid>
        <Stack spacing="24">
          <Stack spacing="16">
            <Text typoToken="titleLarge">
              ¡Ups!
              <br />
              Algo ha salido mal
            </Text>
            <Text typoToken="titleMedium">
              El servicio no se encuentra disponible en el momento. Por favor
              intenta de nuevo más tarde.
            </Text>
          </Stack>
          <IconButton label="Exit" icon={<MdChevronLeft />} />
        </Stack>
        <StyledErrorImage src={errorImage} alt="Error image" />
      </StyledGrid>
    </StyledErrorBoundary>
  );
}

export { LoginErrorBoundary };
