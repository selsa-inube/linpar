import Completed from "@assets/images/Completed.png";
import { ErrorPageRespondInvitation } from "@src/components/layout/ErrorPageRespondInvitation";

function ConfirmationRegisterComplete() {
  return (
    <ErrorPageRespondInvitation
      logo={""}
      logoAlt={""}
      heading={`!Gracias! Registro completado...`}
      description="Hemos enviado la información, revisa tu correo electrónico para ingresar a nuestra plataforma."
      imageAlt="Su registro se ha realizado correctamente."
      image={Completed}
    />
  );
}

export { ConfirmationRegisterComplete };
