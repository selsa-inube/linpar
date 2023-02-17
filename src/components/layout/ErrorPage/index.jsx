import React from "react";
import { Stack } from "../../../components/layout/Stack";
import { Text } from "../../../components/data/Text";
import { IconButton } from "../../../components/inputs/Button";
import {
  StyledErrorPage,
  StyledCompanyLogo,
  StyledGrid,
  StyledErrorImage,
} from "./styles";
import { MdChevronLeft } from "react-icons/md";
import selsaLogo from "../../../assets/images/selsa.png";
import errorImage from "../../../assets/images/timeout.png";

function ErrorPage(props) {
  const {
    logo = selsaLogo,
    logoAlt = "Sistemas Enlinea",
    heading = "!Oh! Algo ha salido mal",
    description = "El servicio no se encuentra disponible en el momento. Por favor intenta de nuevo más tarde.",
    image = errorImage,
    imageAlt = "Ha surgido un error. Revisa la descripción",
  } = props;

  return (
    <StyledErrorPage>
      <StyledCompanyLogo src={logo} alt={logoAlt} />
      <StyledGrid>
        <Stack spacing="24">
          <Stack spacing="16">
            <Text typoToken="titleLarge">{heading}</Text>
            <Text typoToken="titleMedium">{description}</Text>
          </Stack>
          <IconButton label="Exit" icon={<MdChevronLeft />} />
        </Stack>
        <StyledErrorImage src={image} alt={imageAlt} />
      </StyledGrid>
    </StyledErrorPage>
  );
}

export { ErrorPage };
