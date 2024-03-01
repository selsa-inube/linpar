import Expired from "@assets/images/Expired.png";
import { ErrorPage } from "@components/layout/ErrorPage";
import { IClient } from "@context/AppContext/types";

interface ErrorInvitationExpiredProps {
  clientData?: IClient;
}

function ErrorInvitationExpired(props: ErrorInvitationExpiredProps) {
  const { clientData } = props;

  return (
    <ErrorPage
      logo={clientData && clientData.logo}
      logoAlt={clientData && `Logo ${clientData.name}`}
      heading="!Lo sentimos! no hay resultados..."
      description="Su usuario no tiene clientes relacionados, por favor consulte con su administrador."
      imageAlt="No hay resultados."
      image={Expired}
    />
  );
}

export { ErrorInvitationExpired };
export type { ErrorInvitationExpiredProps };
