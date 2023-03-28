import React from "react";
import { Stack } from "../../../components/layout/Stack";
import { Text } from "../../../components/data/Text";
import { Button } from "@inube/design-system";
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

  //function created while giving functionality to the button
  function handleButtonClick() {
    console.log("button clicked");
  }

  return (
    <StyledErrorPage>
      <StyledCompanyLogo src={logo} alt={logoAlt} />
      <StyledGrid>
        <Stack spacing="24">
          <Stack spacing="16">
            <Text typoToken="titleLarge">{heading}</Text>
            <Text typoToken="titleMedium">{description}</Text>
          </Stack>
          <Button
            iconBefore={<MdChevronLeft size={18} />}
            handleClick={handleButtonClick}
          >
            Exit
          </Button>
        </Stack>
        <StyledErrorImage src={image} alt={imageAlt} />
      </StyledGrid>
    </StyledErrorPage>
  );
}

export { ErrorPage };
