import Expired from "@assets/images/Expired.png";
import { ErrorPage } from "@components/layout/ErrorPage";
import { IBusinessUnit } from "@pages/login/types";

interface ErrorInvitationExpiredProps {
  bussinessData?: IBusinessUnit;
}

function ErrorInvitationExpired(props: ErrorInvitationExpiredProps) {
  const { bussinessData } = props;

  return (
    <ErrorPage
      logo={bussinessData && bussinessData.logo}
      logoAlt={bussinessData && `Logo ${bussinessData.name}`}
      heading="!Lo sentimos! no hay resultados..."
      description="Su usuario no tiene clientes relacionados, por favor consulte con su administrador."
      imageAlt="No hay resultados."
      image={Expired}
    />
  );
}

export { ErrorInvitationExpired };
export type { ErrorInvitationExpiredProps };
