import {
  Stack,
  Button,
  Text,
  Grid,
  useMediaQueries,
} from "@inube/design-system";
import { StyledCompanyLogo, StyledErrorImage } from "./styles";
import { MdChevronLeft } from "react-icons/md";

import selsaLogo from "@src/assets/images/selsa.png";
import errorImage from "@src/assets/images/timeout.png";

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

  return (
    <Stack
      direction="column"
      gap={matches["(max-width: 1000px)"] ? "s800" : "120px"}
      padding={matches["(max-width: 600px)"] ? "s400" : "s1000"}
    >
      <StyledCompanyLogo src={logo} alt={logoAlt} />
      <Grid
        templateColumns={
          matches["(max-width: 1000px)"] ? "1fr" : "repeat(2, 1fr)"
        }
        gap={
          matches["(max-width: 600px)"]
            ? "64px"
            : matches["(max-width: 1000px)"]
            ? "120px"
            : "s800"
        }
        alignItems="center"
      >
        <Stack gap="s300" direction="column">
          <Stack gap="s200" direction="column">
            <Text size="large">{heading}</Text>
            <Text size="medium">{description}</Text>
          </Stack>
          <Button iconBefore={<MdChevronLeft size={18} />}>Exit</Button>
        </Stack>
        <StyledErrorImage src={image} alt={imageAlt} />
      </Grid>
    </Stack>
  );
}

export { ErrorPage };
export type { ErrorPageProps };
