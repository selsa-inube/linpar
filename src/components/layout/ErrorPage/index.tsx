import React from "react";
import { Stack, Button } from "@inube/design-system";
import { Text } from "@components/data/Text";
import {
  StyledErrorPage,
  StyledCompanyLogo,
  StyledGrid,
  StyledErrorImage,
} from "./styles";
import { MdChevronLeft } from "react-icons/md";

import selsaLogo from "@src/assets/images/selsa.png";
import errorImage from "@src/assets/images/timeout.png";

interface ErrorPageProps {
  logo: JSX.Element;
  logoAlt: string;
  heading: string;
  description: string;
  image: JSX.Element;
  imageAlt: string;
}

function ErrorPage(props: ErrorPageProps) {
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
        <Stack gap="24px" direction="column">
          <Stack gap="16px" direction="column">
            <Text typoToken="titleLarge">{heading}</Text>
            <Text typoToken="titleMedium">{description}</Text>
          </Stack>
          <Button iconBefore={<MdChevronLeft size={18} />}>Exit</Button>
        </Stack>
        <StyledErrorImage src={image} alt={imageAlt} />
      </StyledGrid>
    </StyledErrorPage>
  );
}

export { ErrorPage };
export type { ErrorPageProps };
