import Expired from "@assets/images/Expired.png";
import { ErrorPageRespondInvitation } from "@src/components/layout/ErrorPageRespondInvitation";

function ErrorInvitationExpired() {
  return (
    <ErrorPageRespondInvitation
      heading="!Lo sentimos! no hay resultados..."
      description="Su usuario no tiene clientes relacionados, por favor consulte con su administrador."
      imageAlt="No hay resultados."
      image={Expired}
    />
  );
}

export { ErrorInvitationExpired };
