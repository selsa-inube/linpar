import selsaLogo from "@assets/images/selsa.png";
import errorImage from "@assets/images/timeout.png";
import { ErrorPageRespondInvitation, ErrorPageProps } from "./index";

const story = {
  components: [ErrorPageRespondInvitation],
  title: "layouts/Error",
};

const Default = (args: ErrorPageProps) => (
  <ErrorPageRespondInvitation {...args} />
);
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
