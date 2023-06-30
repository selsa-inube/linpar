import { ErrorPage } from "@src/components/layout/ErrorPage";

interface ConfirmationRegisterCompleteProps {
  clientData: {
    logo: string;
    logoAlt: string;
  };
}

function ConfirmationRegisterComplete(
  props: ConfirmationRegisterCompleteProps
) {
  const { clientData } = props;
  return (
    <ErrorPage
      logo={clientData.logo}
      logoAlt={clientData.logoAlt}
      heading=" iGracias! Registro completado..."
      description="Hemos enviado la información, revisa tu correo electrónico para ingresar a nuestra plataforma."
      imageAlt="Su registro se ha realizado correctamente."
    />
  );
}

export { ConfirmationRegisterComplete };
