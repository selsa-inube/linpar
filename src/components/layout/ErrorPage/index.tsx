import {
  Stack,
  Button,
  Text,
  useMediaQueries,
  Grid,
} from "@inube/design-system";
import {
  StyledCompany,
  StyledCompanyLogo,
  StyledContainer,
  StyledErrorImage,
} from "./styles";
import { MdChevronLeft } from "react-icons/md";

import selsaLogo from "@assets/images/selsa.png";
import errorImage from "@assets/images/timeout.png";

interface ErrorPageProps {
  logo?: string;
  logoAlt?: string;
  heading?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
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

  const mediaQueries = ["(max-width: 1000px)", "(max-width: 600px)"];
  const matches = useMediaQueries(mediaQueries);

  const handleRedirect = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <StyledContainer>
      <StyledCompany>
        <StyledCompanyLogo src={logo} alt={logoAlt} />
      </StyledCompany>
      <Grid
        templateRows={matches["(max-width: 600px)"] ? "repeat(2, 1fr)" : "1fr"}
        templateColumns={
          matches["(max-width: 600px)"] ? "auto" : "repeat(2, 1fr)"
        }
        alignItems="center"
        gap={matches["(max-width: 600px)"] ? "s800" : "120px"}
      >
        <Stack gap="24px" direction="column">
          <Stack gap="16px" direction="column">
            <Text type="title">{heading}</Text>
            <Text type="title" size="medium">
              {description}
            </Text>
          </Stack>
          <Button
            iconBefore={<MdChevronLeft size={18} />}
            onClick={handleRedirect}
          >
            Exit
          </Button>
        </Stack>
        <StyledErrorImage src={image} alt={imageAlt} />
      </Grid>
    </StyledContainer>
  );
}

export { ErrorPage };
export type { ErrorPageProps };
