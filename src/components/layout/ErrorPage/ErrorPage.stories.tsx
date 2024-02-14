import { ErrorPage, ErrorPageProps } from "./index";
import selsaLogo from "@assets/images/selsa.png";
import errorImage from "@assets/images/timeout.png";

const story = {
  components: [ErrorPage],
  title: "layouts/Error",
};

const Default = (args: ErrorPageProps) => <ErrorPage {...args} />;
Default.args = {
  logo: selsaLogo,
  logoAlt: "Sistemas Enlinea",
  heading: "!Oh! Algo ha salido mal",
  description:
    "El servicio no se encuentra disponible en el momento. Por favor intenta de nuevo más tarde.",
  image: errorImage,
  imageAlt: "Ha surgido un error. Revisa la descripción",
};

export default story;

export { Default };
