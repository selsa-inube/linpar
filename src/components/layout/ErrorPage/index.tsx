import {
  Stack,
  Button,
  Text,
  useMediaQueries,
  Grid,
} from "@inube/design-system";
import { StyledCompanyLogo, StyledErrorImage } from "./styles";
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

  return (
    <Stack
      padding={matches["(max-width: 600px)"] ? "s400" : "s1000"}
      gap={matches["(max-width: 1000px)"] ? "64px" : "120px"}
      direction="column"
    >
      <StyledCompanyLogo src={logo} alt={logoAlt} />
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
          <Button iconBefore={<MdChevronLeft size={18} />}>Exit</Button>
        </Stack>
        <StyledErrorImage src={image} alt={imageAlt} />
      </Grid>
    </Stack>
  );
}

export { ErrorPage };
export type { ErrorPageProps };
