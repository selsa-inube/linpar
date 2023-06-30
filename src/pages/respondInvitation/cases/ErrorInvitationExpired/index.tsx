import { ErrorPage } from "@src/components/layout/ErrorPage";
import { IClient } from "../../types";

interface ConfirmationRegisterCompleteProps {
  clientData: IClient;
}

function ErrorInvitationExpired(props: ConfirmationRegisterCompleteProps) {
  const { clientData } = props;
  return (
    <ErrorPage
      logo={clientData.logo}
      logoAlt={`Logo ${clientData.name}`}
      heading=" Gracias! Registro completado..."
      description="Hemos enviado la información, revisa tu correo electrónico para ingresar a nuestra plataforma."
      imageAlt="Su registro se ha realizado correctamente."
    />
  );
}

export { ErrorInvitationExpired };
